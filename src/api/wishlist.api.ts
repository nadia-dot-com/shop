import { WishlistProductDTO } from "../types/api/wishlist";
import { API_URL } from "./config";

export const fetchWishlist = async (): Promise<WishlistProductDTO[]> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No token");

  const res = await fetch(`${API_URL}/user/wishlist`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
})

  if (!res.ok) throw new Error('Failed to fetch wishlist');

  return res.json()
}