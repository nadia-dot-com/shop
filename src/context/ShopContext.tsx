import { createContext, ReactNode, useState } from "react";
import type { ItemProps, ShopContextProps } from "../types/types";
import { createContextHook } from "../hooks/createContextHook";
import { INITIAL_ITEMS } from "../data/items";
import { All, SALE } from "../data/categories";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {

    const [items, setItems] = useState<ItemProps[]>(INITIAL_ITEMS);
    const [selectedCategories, setSelectedCategories] = useState<string>(All);
    const [order, setOrder] = useState<ItemProps[]>([]);
    const [isOrderOpen, setIsOrderOpen] = useState<boolean>(false);
    const [isOnSale] = useState<ItemProps[]>(items.filter(i => i.isOnSale));


    const addToOrder = (item: ItemProps) => {
        const existingItem = order.find(i => i.id === item.id);
        if (existingItem) {
            setOrder(prev =>
                prev.map(i =>
                    i.id === item.id
                        ? { ...i, quantity: i.quantity + (item.quantity || 1) }
                        : i
                )
            );
        } else {
            setOrder(prev => [...prev, { ...item, quantity: item.quantity || 1 }]);
        }
    }

    const removeFromOrder = (item: ItemProps) => {
        setOrder((prev) =>
            prev.filter((i) => i.id != item.id)
        )
    }

    const updateQuantity = (id: number, quantity: number) => {
        setOrder(prev =>
            prev.map(i =>
                i.id === id
                    ? { ...i, quantity }
                    : i
            )
        );
    };

    const clearOrder = () => setOrder([]);

    const toggleOrder = () => setIsOrderOpen((prev) => !prev);

    const chooseCategory = (category: string) => {
        setSelectedCategories(category);
        if (category === All) {
            setItems(INITIAL_ITEMS)
        } else if (category === SALE) {
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
                clearOrder,
                isOrderOpen,
                toggleOrder,
                selectedCategories,
                chooseCategory,
                isOnSale,
                updateQuantity
            }}>
            {children}
        </ShopContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShopContext = createContextHook(ShopContext, ShopProvider);