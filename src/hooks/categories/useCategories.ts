import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../api/categories.api";
import { Category } from "../../types/api/category";

export const useCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    staleTime: Infinity,
  });
};
