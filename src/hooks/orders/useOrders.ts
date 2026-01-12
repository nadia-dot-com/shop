import { useQuery } from "@tanstack/react-query"
import { OrderResponse } from "../../types/api/order.response";
import { fetchOrders } from "../../api/orders.api"; 

export const useOrders = () => {
    const token = localStorage.getItem("token");

    return useQuery<OrderResponse[], Error>({
        queryKey: ['orders'],
        queryFn: fetchOrders,
        enabled: !!token,
    })
}