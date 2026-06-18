import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import './Contact.css';

const Contact: FC = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setSubmitStatus('idle');

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    phone,
                    message,
                }),
            });

            if (response.ok) {
                setSubmitStatus('success');
                alert('Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm nhất.');
                setName('');
                setPhone('');
                setMessage('');
            } else {
                setSubmitStatus('error');
                alert('Có lỗi xảy ra. Vui lòng thử lại!');
            }
        } catch (error) {
            setSubmitStatus('error');
            alert('Có lỗi xảy ra. Vui lòng thử lại!');
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div>
                    <p className="eyebrow">Liên hệ</p>
                    <h1>Hỗ trợ tư vấn & đặt hàng</h1>
                    <p>Gọi ngay hoặc nhắn Zalo để được tư vấn nhanh, xem mẫu và nhận báo giá ưu đãi.</p>
                </div>
                <div className="contact-info-card">
                    <h2>Thông tin liên hệ</h2>
                    <p>Hotline: <a href="tel:+84944422687">0944 422 687</a> | <a href="tel:+84363181015">0363 181 015</a></p>
                    <p>Zalo: <a href="https://zalo.me/84944422687" target="_blank" rel="noreferrer">0944 422 687</a> | <a href="https://zalo.me/84363181015" target="_blank" rel="noreferrer">0363 181 015</a></p>
                    <p>Facebook: <a href="https://www.facebook.com/profile.php?id=61590762989356" target="_blank" rel="noreferrer">Đồ gỗ mỹ nghệ Nguyễn Đức</a></p>
                    <p>Email: <a href="mailto:vanduc241204@gmail.com">vanduc241204@gmail.com</a></p>
                    <p>Địa chỉ: <a href="https://maps.app.goo.gl/wt3T84LkYSuXknZL7" target="_blank" rel="noreferrer">Số nhà 29, ngõ Lộc Đông Khê, Đan Phượng</a></p>
                </div>
            </section>

            <section className="contact-form-section">
                <div className="contact-form-card">
                    <h2>Gửi yêu cầu ngay</h2>
                    <p>Hãy để lại thông tin, chúng tôi sẽ liên hệ lại trong vòng 1 ngày làm việc.</p>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <label htmlFor="name">Họ và tên</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />

                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />

                        <label htmlFor="message">Nội dung</label>
                        <textarea
                            id="message"
                            rows={6}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />

                        <button type="submit" className="contact-submit" disabled={isLoading}>
                            {isLoading ? 'Đang gửi...' : 'Gửi yêu cầu'}
                        </button>
                    </form>
                    {submitStatus === 'success' && <p className="contact-submit-status contact-submit-status--success">Yêu cầu đã được gửi thành công.</p>}
                    {submitStatus === 'error' && <p className="contact-submit-status contact-submit-status--error">Gửi yêu cầu thất bại, vui lòng thử lại.</p>}
                </div>
            </section>
        </main>
    );
};

export default Contact;