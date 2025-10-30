import { createContext, ReactNode, useState } from "react";
import type { ItemProps, ShopContextValue } from "../types/types";
import { createContextHook } from "../hooks/createContextHook";
import {  INITIAL_ITEMS } from "../data/items";
import { All, SALE } from "../data/categories";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {

    const [items, setItems] = useState<ItemProps[]>(INITIAL_ITEMS);
    const [selectedCategories, setSelectedCategories] = useState<string>(All);
    const [order, setOrder] = useState<ItemProps[]>([]);
    const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
    const [isOnSale] = useState<ItemProps[]>(items.filter(i => i.isOnSale));

    const addToOrder = (item: ItemProps) => {
        const isInArray = order.some(i => i.id === item.id);

        if (!isInArray)
            setOrder((prev) => [...prev, item]);
        // setItems((prev) =>
        //     prev.filter((i) => i.id != item.id)
        // );
    }

    const removeFromOrder = (item: ItemProps) => {
        // setItems((prev) => [...prev, { ...item }]);
        setOrder((prev) =>
            prev.filter((i) => i.id != item.id)
        )
    }

    const toggleOrder = () => setIsOrderOpen((prev) => !prev);

    const chooseCategory = (category: string) => {
        setSelectedCategories(category);
        if (category === All) {
            setItems(INITIAL_ITEMS)
        } else if(category === SALE) {
            setItems(isOnSale);
        } 
        else {
            setItems(INITIAL_ITEMS.filter(i => i.category === category || i.collection === category))
        }
    }

    return (
        <ShopContext.Provider
            value={{
                items,
                order,
                addToOrder,
                removeFromOrder,
                isOrderOpen,
                toggleOrder,
                selectedCategories,
                chooseCategory,
                isOnSale,
            }}>
            {children}
        </ShopContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = createContextHook(ShopContext, ShopProvider);