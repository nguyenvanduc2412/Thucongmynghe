import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for header styles

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Bán Đồ Gỗ Thủ Công Mỹ Nghệ Nguyễn Đức</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Trang Chủ</Link></li>
                    <li><Link to="/products">Sản Phẩm</Link></li>
                    <li><Link to="/about">Giới Thiệu</Link></li>
                    <li><Link to="/contact">Liên Hệ</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;