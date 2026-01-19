import { useMutation } from "@tanstack/react-query";
import { sendOrderToServer } from "../api/order.api";
import { OrderResponse } from "../types/api/order.response";
import { OrderPayload } from "../types/api/order.payload";
import { useUserContext } from "../context/UserContext";
import { queryClient } from "../query/queryClient";

export function useCreateOrder(onSuccessCallback?: () => void, onNextStepCallback?: () => void, onErrorCallback?: (err: Error) => void) {
    const { token } = useUserContext();

    if (!token) {
        throw new Error("No token");
    }

    return useMutation<OrderResponse, Error, OrderPayload>({
        mutationFn: (payload: OrderPayload) => sendOrderToServer(token, payload),

        onSuccess: () => {
            onSuccessCallback?.();
            onNextStepCallback?.();
            queryClient.invalidateQueries({ queryKey: ["orders"] })
        },
        onError: err => {
            onErrorCallback?.(err);
            onNextStepCallback?.();
        },
    })
}