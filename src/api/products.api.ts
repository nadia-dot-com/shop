import { Product } from "../types/api/product"

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch('http://localhost:3000/products')

  if (!res.ok) {
    throw new Error('Failed to fetch products')
  }

  return res.json()
}
