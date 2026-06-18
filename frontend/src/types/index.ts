export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    images?: string[];
    category: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface AboutInfo {
    title: string;
    content: string;
}