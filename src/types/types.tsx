export type ItemProps = {
    id: number;
    title: string;
    img: string;
    desc: string;
    category: string;
    price: string;
}

export type ShopContextValue = {
    items: ItemProps[];
    order: ItemProps[];
    addToOrder: (item: ItemProps)=> void;
    removeFromOrder: (item: ItemProps)=> void;
    isOrderOpen: boolean;
    toggleOrder: ()=> void;
};