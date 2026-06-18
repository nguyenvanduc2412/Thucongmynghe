import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for footer styles

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-bottom-row">
                    <div className="footer-block">
                        <p><strong>Trụ sở:</strong> <a href="https://maps.app.goo.gl/wt3T84LkYSuXknZL7" target="_blank" rel="noreferrer">Số nhà 29, ngõ Lộc Đông Khê, Đan Phượng</a></p>
                        <p><strong>Giờ làm việc:</strong> 24/24</p>
                        <p><strong>Hotline:</strong> <a href="tel:+84944422687">0944 422 687</a> / <a href="tel:+84363181015">0363 181 015</a></p>
                        <p><strong>Email:</strong> <a href="mailto:vanduc241204@gmail.com">vanduc241204@gmail.com</a></p>
                    </div>
                    <div className="footer-block footer-qr-block">
                        <div className="qr-list">
                            <div className="qr-item">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://zalo.me/84944422687" alt="Zalo QR 1" />
                                <p>Zalo 1</p>
                            </div>
                            <div className="qr-item">
                                <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://zalo.me/84363181015" alt="Zalo QR 2" />
                                <p>Zalo 2</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copy">
                    &copy; {new Date().getFullYear()} Nguyễn Đức - Đồ Gỗ Thủ Công Mỹ Nghệ
                </div>
            </div>
        </footer>
    );
};

export default Footer;