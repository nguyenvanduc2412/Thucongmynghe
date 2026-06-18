import type { FC } from 'react';
import { useMemo, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import './ProductDetail.css';

const ProductDetail: FC = () => {
    const { id } = useParams<{ id: string }>();

    const product = useMemo(() => products.find(p => p.id === id), [id]);

    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    useEffect(() => {
        if (product) {
            setSelectedImage((product.images && product.images.length) ? product.images[0] : product.imageUrl);
        }
    }, [product]);

    if (!product) {
        return <div className="product-detail">Sản phẩm không tìm thấy.</div>;
    }

    return (
        <div className="product-detail">
            <h1 className="title">{product.name}</h1>
            <div className="product-detail-grid">
                <div className="product-image-card">
                    <div className="product-main-image">
                        <img src={selectedImage ?? product.imageUrl} alt={product.name} />
                    </div>
                    {product.images && product.images.length > 0 && (
                        <div className="product-thumbs">
                            {product.images.map((src, idx) => (
                                <button key={idx} className={`thumb-btn ${selectedImage === src ? 'active' : ''}`} onClick={() => setSelectedImage(src)} aria-label={`Xem ảnh ${idx + 1}`}>
                                    <img src={src} alt={`${product.name} ${idx + 1}`} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                <div className="product-detail-body">
                    <p className="product-description">{product.description}</p>
                    <p className="product-note">Giá theo yêu cầu, vui lòng liên hệ để được tư vấn và báo giá chính xác.</p>
                    <div className="product-contact-row">
                        <a className="contact-action contact-chip" href="tel:+84944422687">Gọi ngay: 0944 422 687</a>
                        <a className="contact-action contact-chip" href="tel:+84363181015">Gọi ngay: 0363 181 015</a>
                        <a className="contact-action contact-chip contact-chip--secondary" href="https://zalo.me/84944422687" target="_blank" rel="noopener noreferrer">Nhắn Zalo: 0944 422 687</a>
                        <a className="contact-action contact-chip contact-chip--secondary" href="https://zalo.me/84363181015" target="_blank" rel="noopener noreferrer">Nhắn Zalo: 0363 181 015</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;