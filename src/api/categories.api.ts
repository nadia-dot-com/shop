import { Category } from "../types/api/category"

export const fetchCategories = async (): Promise<Category[]> => {
  const res = await fetch('http://localhost:3000/categories')

  if (!res.ok) {
    throw new Error('Failed to fetch categories')
  }

  return res.json()
}