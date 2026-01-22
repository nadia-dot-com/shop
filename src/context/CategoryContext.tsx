import { createContext, ReactNode, useState } from "react";
import { CategoryContextValue } from "../types/categoryTypes";
import { categoriesGroups } from "../data/categories";
import { createContextHook } from "../hooks/createContextHook";

export const CategoryContext = createContext<CategoryContextValue | null>(null);

export function CategoryProvider({ children }: { children: ReactNode }) {
    const [selectedCategory, setSelectedCategory] = useState<string>(categoriesGroups.all);

   return <CategoryContext.Provider
        value={{
            selectedCategory,
            chooseCategory: setSelectedCategory,
        }}
    >
        {children}
    </ CategoryContext.Provider>
}

export const useCategoryContext = createContextHook(CategoryContext, CategoryProvider);
