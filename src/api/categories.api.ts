import { Category } from "../types/api/category"
import { API_URL } from "./config"

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API_URL}/categories`)

  if (!res.ok) {
    throw new Error('Failed to fetch categories')
  }

  return res.json()
}