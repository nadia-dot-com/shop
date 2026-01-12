import { createContext, ReactNode, useEffect, useState } from "react";
import { UserContextProps, UserData } from "../types/userTypes";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ORDERS_HISTORY_KEY, USER } from "../data/locatStorageKey";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { OrderResponse } from "../types/api/order.response";

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useLocalStorage<UserData | null>(USER, null);
    const [orders, setOrders] = useLocalStorage<OrderResponse[]>(ORDERS_HISTORY_KEY, []);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const { data } = useCurrentUser();

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data])

    const toggleModalOpen = () => setIsLoginModalOpen((prev) => !prev);

    const addOrder = (order: OrderResponse) => {
        setOrders(prev => [...prev, order])
    }

    const logout = () => setUser(null);

    return (
        <UserContext.Provider
            value={{
                user,
                orders,
                isLoginModalOpen,

                updateUser: setUser,
                toggleModalOpen,
                addOrder,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = createContextHook(UserContext, UserProvider);