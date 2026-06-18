import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    id: string;
    title: string;
    image: string;
    description: string;
    price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, image, description, price }) => {
    return (
        <Link to={`/products/${id}`} className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
        </Link>
    );
};

export default ProductCard;