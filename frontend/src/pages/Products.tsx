import React from 'react';
import './Products.css';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Products: React.FC = () => {
    return (
        <main className="products-page">
            <h1>Danh sách sản phẩm</h1>
            <div className="product-grid">
                {products.map(p => (
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
        </main>
    );
};

export default Products;
