import { createContext, ReactNode, useState } from "react";
import type {  ItemProps, ShopContextValue } from "../types/types";
import { createContextHook } from "../hooks/createContextHook";
import { INITIAL_ITEMS } from "../data/items/items";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export function CardProvider({children}: {children: ReactNode}) {
    const [items, setItems] = useState<ItemProps[]>(INITIAL_ITEMS);
    const [order, setOrder] = useState<ItemProps[]>([]);

    const addToOrder = (item: ItemProps) => {
        setOrder((prev) => [...prev, item]);
        setItems((prev) => 
        prev.filter((i)=> i.id !=item.id)
        );
    }

    const removeFromOrder = (item: ItemProps) => {
        setItems((prev)=> [...prev, item]);
        setOrder((prev) => 
        prev.filter((i)=> i.id !=item.id)
        )
    }

    return <ShopContext.Provider value={{items, order, addToOrder, removeFromOrder}}>{children}</ShopContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = createContextHook(ShopContext, CardProvider);