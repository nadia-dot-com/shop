import { createContext, ReactNode, useEffect, useState } from "react";
import { UserContextProps, UserData } from "../types/userTypes";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ORDERS_HISTORY_KEY, USER } from "../data/locatStorageKey";
import { NewOrderProps, OrderProps } from "../types/orderTypes";

import { v4 as uuid } from 'uuid';
import { useCurrentUser } from "../hooks/useCurrentUser";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useLocalStorage<UserData | null>(USER, null);
    const [orders, setOrders] = useLocalStorage<OrderProps[]>(ORDERS_HISTORY_KEY, []);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const [userWishlist, setUserWishlist] = useState<string[]>([]);
    const { data } = useCurrentUser();

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data])

    const toggleModalOpen = () => setIsLoginModalOpen((prev) => !prev);

    const addOrder = (data: NewOrderProps) => {
        const newOrder: OrderProps = {
            ...data,
            orderId: uuid().slice(0, 8),
            createdAt: new Date().toISOString(),
            status: "on-hold",
        }

        setOrders(prev => [...prev, newOrder])
    }

    const logout = () => setUser(null);

    const toggleUserWishlist = (productId: string) => {
        setUserWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    const mergeUserWishlist = (wishlist: string[]) => setUserWishlist(prev => [...new Set([...prev, ...wishlist])]);

    return (
        <UserContext.Provider
            value={{
                user,
                orders,
                isLoginModalOpen,
                userWishlist,

                updateUser: setUser,
                toggleModalOpen,
                addOrder,
                logout,
                toggleUserWishlist,
                mergeUserWishlist,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = createContextHook(UserContext, UserProvider);