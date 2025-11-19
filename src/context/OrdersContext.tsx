import { createContext, ReactNode, useState } from "react";
import { OrdersContextProps } from "../types/ordersTypes";
import { OrdersProps } from "../types/userTypes";
import { createContextHook } from "../hooks/createContextHook";


export const OrdersContext = createContext<OrdersContextProps | null>(null);

export function OrdersProvider({ children }: { children: ReactNode }) {
    const [orders, setOrders] = useState<OrdersProps[]>([]);


    const addOrder = (data: OrdersProps) => setOrders(prev => [...prev, data])

    return (
        <OrdersContext.Provider
            value={{
                orders,
                addOrder,
            }}
        >
            {children}
        </OrdersContext.Provider>
    )
}

export const useOrdersContextHook = createContextHook(OrdersContext, OrdersProvider); 