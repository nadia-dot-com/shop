import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../../api/products.api"
import { useMemo } from "react";
import { categoriesGroups } from "../../data/categories";
import { fromSlugToTitle } from "../../utils/fromSlugToTitle";

export const useProducts = (selectedCategory: string = categoriesGroups.all) => {
    const query = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts,
        staleTime: Infinity,
    });


    const filtered = useMemo(() => {
        if (!query.data) return [];

        if (selectedCategory === categoriesGroups.all) {
            return query.data;
        }

        if (selectedCategory === categoriesGroups.sale) {
            return query.data.filter(p => p.discount > 0);
        }

        const normalized = fromSlugToTitle(selectedCategory);

        return query.data.filter(
            p => {
                return (
                    p.categoryName === normalized ||
                    p.collectionName === normalized
                )
            }
        );
    }, [query.data, selectedCategory]);

    return {
        ...query,
        data: filtered,
    };
}