import { createContext, ReactNode, useState } from "react";
import type { ItemProps, ShopContextValue } from "../types/types";
import { createContextHook } from "../hooks/createContextHook";
import { all, INITIAL_ITEMS } from "../data/items/items";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextValue | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {

    const [items, setItems] = useState<ItemProps[]>(INITIAL_ITEMS);
    // const [currentItems, setCurrentItems] = useState<ItemProps[]>()
    const [selectedCategories, setSelectedCategories] = useState<string>(all);
    const [order, setOrder] = useState<ItemProps[]>([]);
    const [isOrderOpen, setIsOpen] = useState<boolean>(false);

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

    const toggleOrder = () => setIsOpen((prev) => !prev)

    const chooseCategory = (category: string) => {
        setSelectedCategories(category);
        if (category === all) {
            setItems(INITIAL_ITEMS)
        } else {
            setItems(INITIAL_ITEMS.filter(i => i.category === category))
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
                chooseCategory
            }}>
            {children}
        </ShopContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = createContextHook(ShopContext, ShopProvider);