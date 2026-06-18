import React from 'react';
import { Link } from 'react-router-dom';

const Category: React.FC = () => {
    const categories = [
        { id: 1, name: 'Bàn Ghế' },
        { id: 2, name: 'Tủ Kệ' },
        { id: 3, name: 'Giường' },
        { id: 4, name: 'Đồ Trang Trí' },
    ];

    return (
        <div className="category-page">
            <h1>Danh Mục Sản Phẩm</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Category;