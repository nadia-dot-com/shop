









import { useMutation } from "@tanstack/react-query";
import { sendOrderToServer } from "../api/order.api";
import { OrderResponse } from "../types/api/order.response";
import { OrderPayload } from "../types/api/order.payload";

export function useCreateOrder(onSuccessCallback?: () => void, onNextStepCallback?: () => void, onErrorCallback?: (err: Error) => void) {

    return useMutation<OrderResponse, Error, OrderPayload>({
        mutationFn: sendOrderToServer,

        onSuccess: () => {
            onSuccessCallback?.();
            onNextStepCallback?.();
        },
        onError: err => {
            onErrorCallback?.(err);
            onNextStepCallback?.();
        }
    })
}