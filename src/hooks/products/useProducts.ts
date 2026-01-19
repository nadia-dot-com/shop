import { useQuery } from "@tanstack/react-query"
import { fetchProducts } from "../../api/products.api"
import { useMemo } from "react";
import { ALL, SALE } from "../../data/categories";
import { fromSlugToTitle } from "../../utils/fromSlugToTitle";

export const useProducts = (selectedCategory: string = ALL) => {
    const query = useQuery({
        queryKey: ['products', selectedCategory],
        queryFn: fetchProducts,
    });


    const filtered = useMemo(() => {
        if (!query.data) return [];

        if (selectedCategory === ALL) {
            return query.data;
        }

        if (selectedCategory === SALE) {
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