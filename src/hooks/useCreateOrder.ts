import { useMutation } from "@tanstack/react-query";
import { useUserContext } from "../context/UserContext";
import { sendOrderToServer } from "../api/order.api";
import { OrderResponse } from "../types/api/order.response";
import { OrderPayload } from "../types/api/order.payload";

export function useCreateOrder(onSuccessCallback?: () => void, onErrorCallback?: ()=> void) {
    const { addOrder } = useUserContext();

    return useMutation<OrderResponse, Error, OrderPayload>({
        mutationFn: sendOrderToServer,

        onSuccess: (order: OrderResponse) => {
            addOrder(order);
            onSuccessCallback?.();
        },
        onError: () => {
            onSuccessCallback?.();
            onErrorCallback?.();
        }
    })
}