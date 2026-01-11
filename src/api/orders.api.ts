import { OrderResponse } from "../types/api/order.response"
import { API_URL } from "./config"

export const fetchOrders = async (): Promise<OrderResponse[]> => {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("No token");
  }

  const res = await fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  if (!res.ok) {
    throw new Error('Failed to fetch orders')
  }

  return res.json()
}