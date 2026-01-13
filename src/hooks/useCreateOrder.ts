import { useMutation } from "@tanstack/react-query";
import { sendOrderToServer } from "../api/order.api";
import { OrderResponse } from "../types/api/order.response";
import { OrderPayload } from "../types/api/order.payload";

export function useCreateOrder(onSuccessCallback?: () => void, onNextStepCallback?: () => void, onErrorCallback?: (err: Error) => void) {
     const token = localStorage.getItem("token");

     if(!token) {
        throw new Error("No token");
     }

    return useMutation<OrderResponse, Error, OrderPayload>({
        mutationFn: (payload: OrderPayload) => sendOrderToServer(token, payload),

        onSuccess: () => {
            onSuccessCallback?.();
            onNextStepCallback?.();
        },
        onError: err => {
            onErrorCallback?.(err);
            onNextStepCallback?.();
        },
    })
}