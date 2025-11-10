import { createContext, ReactNode, useState } from "react";
import type { ItemProps, ShopContextProps } from "../types/shopTypes";
import { createContextHook } from "../hooks/createContextHook";
import { INITIAL_ITEMS } from "../data/items";
import { All, SALE } from "../data/categories";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ORDER_KEY, IS_ORDER_OPEN_KEY } from "../data/locatStorageKey";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext<ShopContextProps | undefined>(undefined);

export function ShopProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<ItemProps[]>(INITIAL_ITEMS);
    const [selectedCategory, setSelectedCategory] = useState<string>(All);
    const [order, setOrder] = useLocalStorage<ItemProps[]>(ORDER_KEY, []);
    const [isOrderOpen, setIsOrderOpen] = useLocalStorage<boolean>(IS_ORDER_OPEN_KEY, false);
    const [isOnSale] = useState<ItemProps[]>(items.filter(i => i.isOnSale));

    const addToOrder = (item: ItemProps) => {
        const existingItem = order.find(i => i.id === item.id);
        let newOrder: ItemProps[];

        if (existingItem) {
            const newQuantity = Math.min(existingItem.quantity + (item.quantity || 1), item.stock);
            newOrder = order.map(i =>
                i.id === item.id
                    ? { ...i, quantity: newQuantity }
                    : i
            )
        } else {
            const safeQuantity = Math.min(item.quantity || 1, item.stock)
            newOrder = [...order, { ...item, quantity: safeQuantity }];
        }

        setItems(prev => prev.map(i =>
            i.id === item.id
                ? { ...i, stock: i.stock - item.quantity }
                : i
        ));
        setOrder(newOrder);
    }

    const removeFromOrder = (item: ItemProps) => {
        setItems(prev => prev.map(i => i.id === item.id ? { ...i, stock: i.stock + (item.quantity || 0) }
            : i
        ));
        setOrder(prev => prev.filter((i) => i.id != item.id))
    }

    const updateQuantity = (id: number, quantity: number) => {
        setOrder(prev =>
            prev.map(i =>
                i.id === id
                    ? { ...i, quantity: Math.min(quantity, i.stock) }
                    : i
            ));
    };

    const clearOrder = () => {
        setItems(prev =>
            prev.map(item => {
                const orderedItem = order.find(o => o.id === item.id);
                if (orderedItem) {
                    return {
                        ...item,
                        stock: item.stock + (orderedItem.quantity || 0),
                    };
                }
                return item;
            })
        );
        setOrder([])
    };

    const toggleOrder = () => setIsOrderOpen(prev => !prev);

    const chooseCategory = (category: string) => {
        setSelectedCategory(category);
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
                selectedCategory,
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