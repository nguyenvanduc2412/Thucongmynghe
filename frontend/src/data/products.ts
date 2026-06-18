import { Product } from '../types';
import cab1 from '../assets/images/product-cabinet-1.jpg';
import cab2 from '../assets/images/product-cabinet-2.jpg';
import cab3 from '../assets/images/product-cabinet-3.jpg';
import cab4 from '../assets/images/product-cabinet-4.jpg';
import cab5 from '../assets/images/product-cabinet-5.jpg';
import cab6 from '../assets/images/product-cabinet-6.jpg';

export const products: Product[] = [
    {
        id: '1',
        name: 'Bàn gỗ sang trọng',
        description: 'Bàn gỗ thủ công với đường nét tinh xảo, hoàn thiện bóng mượt.',
        price: 280,
        imageUrl: '/images/anh1.jpg',
        category: 'bàn'
    },
    {
        id: '2',
        name: 'Ghế gỗ cao cấp',
        description: 'Ghế ngồi êm ái, phù hợp với phòng khách và phòng ăn.',
        price: 150,
        imageUrl: '/images/anh2.jpg',
        category: 'ghế'
    },
    {
        id: '3',
        name: 'Trang trí bàn',
        description: 'Đồ trang trí gỗ nhỏ xinh, mang đến vẻ ấm cúng cho không gian.',
        price: 45,
        imageUrl: '/images/anh3.jpg',
        category: 'trang-tri'
    },
    {
        id: '4',
        name: 'Tủ gỗ truyền thống',
        description: 'Tủ đa năng, chất liệu gỗ tự nhiên, thiết kế cổ điển.',
        price: 520,
        imageUrl: cab1,
        images: [cab1, cab2, cab3, cab4, cab5, cab6],
        category: 'tủ'
    },
    {
        id: '5',
        name: 'Bàn cà phê nhỏ',
        description: 'Bàn cà phê thiết kế nhỏ gọn, phù hợp không gian hiện đại.',
        price: 95,
        imageUrl: '/images/anh4.jpg',
        category: 'bàn'
    },
    {
        id: '6',
        name: 'Kệ sách gỗ',
        description: 'Kệ sách chắc chắn, chứa được nhiều sách và vật dụng trang trí.',
        price: 260,
        imageUrl: '/images/anh5.jpg',
        category: 'kệ'
    }
];
