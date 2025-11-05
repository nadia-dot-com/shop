import { ButtonHTMLAttributes, ReactNode } from "react";

export type ItemProps = {
    id: number;
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
}

export type ShopContextProps = {
    items: ItemProps[];
    order: ItemProps[];
    addToOrder: (item: ItemProps) => void;
    removeFromOrder: (item: ItemProps) => void;
    clearOrder: ()=> void;
    isOrderOpen: boolean;
    toggleOrder: () => void;
    selectedCategories: string;
    chooseCategory: (category: string) => void;
    isOnSale: ItemProps[];
    updateQuantity: (id: number, quantity: number)=> void;
};

export type UserContextProps = {
    isLoginModalOpen: boolean;
    toggleModalOpen: () => void;
}

export type CategoryProps = {
    img: string;
    category: string;
}

export type PresentationProps = {
    img: string;
    title: string;
    desc: string;
    category: string;
}

export type HotStopProps = {
    top: string;
    left: string;
    productId: number;
};

export type CollectionProps = {
    img: string;
    title: string;
    hotspots: HotStopProps[];
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string | ReactNode;
};
