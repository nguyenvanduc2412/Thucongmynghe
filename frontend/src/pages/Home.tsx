import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {

    return (
        <main className="home-page">
            <section className="home-hero">
                <div className="hero-copy">
                    <span className="eyebrow">Nghệ thuật gỗ truyền thống</span>
                    <h1>Đồ gỗ thủ công tinh tế cho không gian của bạn</h1>
                    <p>Chúng tôi chế tác những sản phẩm gỗ thủ công độc đáo, bền bỉ và mang hơi thở truyền thống Việt Nam.</p>
                    <div className="hero-buttons">
                        <Link to="/products" className="hero-button primary">Xem sản phẩm</Link>
                        <a className="hero-button secondary" href="/contact">Liên hệ ngay</a>
                    </div>
                </div>
                <img className="hero-image" src="/images/anh6.jpg" alt="Wood craftsmanship" />
            </section>

            <section className="featured-products" id="featured-products">
                <h2>Sản phẩm nổi bật</h2>
                    <div className="product-grid">
                        {products.slice(0,3).map(p => (
                            <ProductCard
                                key={p.id}
                                id={p.id}
                                title={p.name}
                                image={p.imageUrl}
                                description={p.description}
                                price={p.price}
                            />
                        ))}
                    </div>
            </section>

            <section className="contact-panel">
                <div className="contact-card">
                    <h2>Quý khách muốn xem thêm hàng?</h2>
                    <p>Khám phá thêm các sản phẩm gỗ thủ công khác ngay hôm nay.</p>
                    <Link className="contact-action" to="/products">Xem thêm hàng</Link>
                </div>
                <div className="contact-card contact-card--alt">
                    <h2>Thông tin liên hệ</h2>
                    <p>Vui lòng gọi hoặc nhắn tin Zalo để đặt hàng nhanh và được tư vấn chi tiết.</p>
                    <div className="contact-links">
                        <a className="contact-action" href="tel:+84944422687">Hotline: 0944 422 687</a>
                        <a className="contact-action" href="tel:+84363181015">Hotline: 0363 181 015</a>
                        <a className="contact-action contact-action--zalo" href="https://zalo.me/84944422687" target="_blank" rel="noreferrer">Zalo: 0944 422 687</a>
                        <a className="contact-action contact-action--zalo" href="https://zalo.me/84363181015" target="_blank" rel="noreferrer">Zalo: 0363 181 015</a>
                        <a className="contact-action" href="https://www.facebook.com/profile.php?id=61590762989356" target="_blank" rel="noreferrer">Đồ gỗ mỹ nghệ Nguyễn Đức</a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;