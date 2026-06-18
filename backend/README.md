# Backend - Thúc Công Mỹ Nghệ Website

## Cài đặt

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Cấu hình email
Tạo file `.env` từ `.env.example`:
```bash
cp .env.example .env
```

### 3. Thêm thông tin email của bạn vào `.env`

#### Cách lấy App Password từ Gmail:

1. **Bật 2-Factor Authentication** trên tài khoản Gmail của bạn
2. Truy cập: https://myaccount.google.com/apppasswords
3. Chọn **Mail** và **Windows (hoặc device của bạn)**
4. Google sẽ tạo một mật khẩu ứng dụng (16 ký tự)
5. Sao chép mật khẩu này vào `.env` (SMTP_PASS)

**File .env của bạn sẽ trông như thế này:**
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=xxxx xxxx xxxx xxxx
ADMIN_EMAIL=your-email@gmail.com
ALLOWED_ORIGINS=http://localhost:3000,https://your-free-domain.vercel.app,https://your-free-domain.netlify.app
PORT=5000
NODE_ENV=development
```

> `ALLOWED_ORIGINS` cho phép frontend chạy từ các URL khác nhau. Với deployment miễn phí, bạn chỉ cần thêm domain Vercel/Netlify vào giá trị này.

## Chạy Backend

### Mode Development (với auto-reload)
```bash
npm run dev
```

### Mode Production
```bash
npm start
```

Server sẽ chạy trên: `http://localhost:5000`

## API Endpoints

### POST /api/contact
Nhận yêu cầu từ form liên hệ và gửi email thông báo

**Request body:**
```json
{
    "name": "Tên khách hàng",
    "phone": "0944 422 687",
    "message": "Nội dung yêu cầu"
}
```

**Response:**
```json
{
    "success": true,
    "message": "Yêu cầu đã được gửi thành công!"
}
```

### GET /api/health
Kiểm tra trạng thái của server

## Troubleshooting

- **"Không thể kết nối email"**: Kiểm tra lại cấu hình SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS
- **"App password không hoạt động"**: Đảm bảo bạn đã bật 2-Factor Authentication trên Gmail
- **CORS error**: Kiểm tra PORT frontend và backend có khớp không

## CORS Configuration

Nếu frontend và backend chạy trên port khác nhau, CORS đã được cấu hình để cho phép requests từ `http://localhost:*`

Để thay đổi, sửa trong `server.js`:
```javascript
app.use(cors({
    origin: 'http://localhost:3000', // Port của frontend
    credentials: true
}));
```
