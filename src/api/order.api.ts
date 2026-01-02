import { OrderPayload } from "../types/api/order.payload";
import { OrderResponse } from "../types/api/order.response";
import { API_URL } from "./config";

export async function sendOrderToServer(
    order: OrderPayload
): Promise<OrderResponse> {
    console.log('sendOrderToServer called', order);

    const token = localStorage.getItem("token");
    console.log('token', token);

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

    console.log('RESPONSE STATUS', res.status);

    if (!res.ok) {
        throw new Error("Failed to post order")
    }

    return res.json();
}