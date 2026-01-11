import { OrderPayload } from "../types/api/order.payload";
import { OrderResponse } from "../types/api/order.response";
import { API_URL } from "./config";

export async function sendOrderToServer(
    order: OrderPayload
): Promise<OrderResponse> {
    const token = localStorage.getItem("token");

    if (!token) {
        console.log('NO TOKEN');
        throw new Error("No token");
    }

    const res = await fetch(`${API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            ...order,
            shippingDetails: {
                ...order.shippingDetails,
                company: 'stub',
                notes: 'stub',
            }
        }),
    });

    const response = await res.json()

    if (!res.ok) {
        throw new Error(response.message)
    }

    return response;
}