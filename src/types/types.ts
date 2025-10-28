import { ButtonHTMLAttributes, ReactNode } from "react";

export type ItemProps = {
    id: number;
    title: string;
    img: string;
    shortDesc: string;
    desc: string;
    category: string;
    collection?: string
    price: string;
}

export type ShopContextValue = {
    items: ItemProps[];
    order: ItemProps[];
    addToOrder: (item: ItemProps) => void;
    removeFromOrder: (item: ItemProps) => void;
    isOrderOpen: boolean;
    toggleOrder: () => void;
    // showFullItem: boolean;
    selectedCategories: string;
    chooseCategory: (category: string) => void;
};

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
};

export type CollectionProps = {
    img: string;
    title: string;
    hotspots: HotStopProps[];
}

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    text: string | ReactNode;
};
