import { ButtonHTMLAttributes, ReactNode } from "react";
import { Product } from "./api/product";
import { OrderItem } from "./orderTypes";

export type ItemProps = {
    id: string;
    title: string;
    img: string[];
    shortDesc: string;
    desc: string;
    category: string;
    collection?: string;
    price: string;
    stock: number;
    quantity: number;
    isOnSale: boolean;
    createdAt: string;
}

export type ProductProps = {
    id?: string;
    title: string;
    imagesUrls: string[];
    shortDescription: string;
    fullDescription: string;
    category: string;
    collection?: string;
    price: number;
    stock?: number;
    quantity?: number;
    discount: number;
    releaseDate: string;
}

export type CartContextValue = {

    cartItems: OrderItem[];
    addToCart: (product: Product, quantity?: number) => void;
    removeFromCart: (item: OrderItem) => void;
    clearCart: () => void;

    isCartOpen: boolean;
    toggleCartOpen: () => void;

    updateQuantity: (id: string, quantity: number) => void;
};

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string | ReactNode;
};
