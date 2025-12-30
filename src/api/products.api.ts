import { Product } from "../types/api/product"
import { API_URL } from "./config"

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_URL}/products`)

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}
