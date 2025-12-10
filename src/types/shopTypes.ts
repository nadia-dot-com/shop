import { ButtonHTMLAttributes, ReactNode } from "react";

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

export type ShopContextProps = {
    items: ItemProps[];
    order: ItemProps[];

    addToOrder: (item: ItemProps) => void;
    removeFromOrder: (item: ItemProps) => void;
    clearOrder: ()=> void;
    finalizeOrder: ()=> void;

    isOrderOpen: boolean;
    toggleOrderModal: () => void;

    selectedCategory: string;
    chooseCategory: (category: string) => void;

    isOnSale: ItemProps[];
    updateQuantity: (id: string, quantity: number)=> void;

    guestWishlist: string[];
    toggleGuestWishlist: (productId: string) => void; 
    cleanGuestWishlist: () => void;
};

export type CategoryProps = {
    img: string;
    category: string;
}

export type PresentationProps = {
    id: string;
    img: string;
    title: string;
    desc: string;
    category: string;
}

export type HotStopProps = {
    top: string;
    left: string;
    productId: string;
};

export type CollectionProps = {
    img: string;
    title: string;
    hotspots: HotStopProps[];
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string | ReactNode;
};
