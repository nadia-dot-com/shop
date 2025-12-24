import { useQuery } from "@tanstack/react-query"
import { fetchCategories } from "../api/categories.api"

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: fetchCategories,
    })
}