import { WishlistProductDTO } from "../types/api/wishlist";
import { API_URL } from "./config";

export const fetchWishlist = async (token: string): Promise<WishlistProductDTO[]> => {

  const res = await fetch(`${API_URL}/user/wishlist`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const data = await res.json()

  if (!res.ok) {
    throw new Error(data?.message ?? "Failed to fetch wishlist. An unexpected Error was received from the server.")
  }

  return data;
}