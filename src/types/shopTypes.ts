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

export type ShopContextProps = {
    order: OrderItem[];

    addToOrder: (product: Product, quantity?: number) => void;
    removeFromOrder: (item: OrderItem) => void;
    clearOrder: () => void;

    isOrderOpen: boolean;
    toggleOrderModal: () => void;

    selectedCategory: string;
    chooseCategory: (category: string) => void;

    updateQuantity: (id: string, quantity: number) => void;

    guestWishlist: string[];
    toggleGuestWishlist: (productId: string) => void;
    cleanGuestWishlist: () => void;
};

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string | ReactNode;
};
