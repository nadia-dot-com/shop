import { createContext, ReactNode, useEffect, useState } from "react";
import type { ShopContextProps } from "../types/shopTypes";
import { createContextHook } from "../hooks/createContextHook";
import { ALL } from "../data/categories";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ORDER_KEY, IS_ORDER_OPEN_KEY, GUEST_WISHLIST_KEY } from "../data/locatStorageKey";
import { toast } from "react-toastify";
import { Product } from "../types/api/product";
import { OrderItem } from "../types/orderTypes";

export const ShopContext = createContext<ShopContextProps | null>(null);

const MAX_ITEMS = 100;

export function ShopProvider({ children }: { children: ReactNode }) {
    const [selectedCategory, setSelectedCategory] = useState<string>(ALL);
    const [order, setOrder] = useLocalStorage<OrderItem[]>(ORDER_KEY, []);
    const [isOrderOpen, setIsOrderOpen] = useLocalStorage<boolean>(IS_ORDER_OPEN_KEY, false);
    const [guestWishlist, setGuestWishlist] = useLocalStorage<string[]>(GUEST_WISHLIST_KEY, []);

    useEffect(() => {
        if (isOrderOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = ''
        }
    }, [isOrderOpen])

    const addToOrder = (product: Product, quantity: number = 1) => {
        let didAdd = false;

        setOrder(prev => {

            const totalItems = prev.reduce((sum, i) => sum + i.quantity, 0);

            if (totalItems + quantity > MAX_ITEMS) {
                toast.error(`Cart limit reached (100 items)`);
                return prev;
            }

            const existing = prev.find(i => i.id === product.id);

            if (existing) {
                if (existing.quantity >= existing.stockQuantity) {
                    return prev;
                }

                didAdd = true;

                return prev.map(i =>
                    i.id === product.id
                        ? {
                            ...i,
                            quantity: Math.min(
                                i.quantity + quantity,
                                i.stockQuantity
                            ),
                        }
                        : i
                );
            }

            didAdd = true;

            const newItem: OrderItem = {
                id: product.id,
                name: product.name,
                price: product.price,
                discount: product.discount,
                img: product.imagesUrls[0],
                stockQuantity: product.stockQuantity,
                categoryName: product.categoryName,
                quantity: Math.min(quantity, product.stockQuantity),
            };

            return [...prev, newItem];
        });

        if (didAdd) {
            toast.success(`${product.name} added to Shopping Cart!`);
        }
    };


    const removeFromOrder = (item: OrderItem) => setOrder(prev => prev.filter((i) => i.id != item.id));

    const updateQuantity = (id: string, quantity: number) => {
        setOrder(prev =>
            prev.map(i =>
                i.id === id
                    ? { ...i, quantity: Math.min(quantity, i.stockQuantity) }
                    : i
            ));
    };

    const clearOrder = () => setOrder([]);

    const toggleOrderModal = () => setIsOrderOpen(prev => !prev);

    const chooseCategory = (category: string) => {
        setSelectedCategory(category);
    };

    const toggleGuestWishlist = (productId: string) => {
        setGuestWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    const cleanGuestWishlist = () => setGuestWishlist([])

    return (
        <ShopContext.Provider
            value={{
                selectedCategory,
                chooseCategory,

                order,
                updateQuantity,
                addToOrder,
                removeFromOrder,
                clearOrder,

                isOrderOpen,
                toggleOrderModal,

                guestWishlist,
                toggleGuestWishlist,
                cleanGuestWishlist
            }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShopContext = createContextHook(ShopContext, ShopProvider);