const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = process.env.ALLOWED_ORIGINS
            ? process.env.ALLOWED_ORIGINS.split(',').map((origin) => origin.trim())
            : null;

        if (!origin || !allowedOrigins || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configure email transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

// Verify transporter connection
transporter.verify((error, success) => {
    if (error) {
        console.log('❌ Email transporter error:', error);
    } else {
        console.log('✅ Email transporter ready:', success);
    }
});

// Contact form API endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, phone, message } = req.body;

        // Validate input
        if (!name || !phone || !message) {
            return res.status(400).json({ 
                error: 'Missing required fields: name, phone, message' 
            });
        }

        // Send email to admin
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.ADMIN_EMAIL,
            subject: `Yêu cầu mới từ ${name}`,
            html: `
                <h2>Yêu cầu mới từ khách hàng</h2>
                <p><strong>Họ và tên:</strong> ${name}</p>
                <p><strong>Số điện thoại:</strong> ${phone}</p>
                <p><strong>Nội dung yêu cầu:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
                <hr>
                <p><em>Email được gửi vào lúc: ${new Date().toLocaleString('vi-VN')}</em></p>
            `,
            replyTo: phone, // Can't use phone as reply, but keeping for reference
        };

        await transporter.sendMail(mailOptions);

        console.log(`✅ Contact form received from ${name} (${phone})`);

        res.status(200).json({ 
            success: true,
            message: 'Yêu cầu đã được gửi thành công!' 
        });

    } catch (error) {
        console.error('❌ Error sending email:', error);
        res.status(500).json({ 
            error: 'Có lỗi xảy ra khi gửi yêu cầu' 
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});
