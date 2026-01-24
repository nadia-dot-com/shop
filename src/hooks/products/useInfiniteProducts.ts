// import { useInfiniteQuery } from "@tanstack/react-query"
// import { fetchInfiniteProducts } from "../../api/products.api"
import { categoriesGroups } from "../../data/categories"
import { fromSlugToTitle } from "../../utils/fromSlugToTitle";
import { useProducts } from "./useProducts";
import { useMemo } from "react";
import { Product } from "../../types/api/product";

const PAGE_SIZE = 12;

export const useInfiniteProducts = (
    selectedCategory: string = categoriesGroups.all
) => {
    const {data: products = [], isLoading, error} = useProducts();

    // const infiniteQuery = useInfiniteQuery({
    //     queryKey: ['products', 'infinite', selectedCategory],
    //     queryFn: ({pageParam = 0 }) => 
    //         fetchInfiniteProducts({
    //             cursor: pageParam,
    //             category: selectedCategory,
    //         }),
    //     initialPageParam: 0,
    //     getNextPageParam: (lastPage) => lastPage.nextCursor,
    //     getPreviousPageParam: (firstPage) => firstPage.prevCursor
    // });

        const filtered = useMemo(() => {
        if (selectedCategory === categoriesGroups.all) {
            return products;
        }

        if (selectedCategory === categoriesGroups.sale) {
            return products.filter(p => p.discount > 0);
        }

        const normalized = fromSlugToTitle(selectedCategory);

        return products.filter(
            p => {
                return (
                    p.categoryName === normalized ||
                    p.collectionName === normalized
                )
            }
        );
    }, [products, selectedCategory]);

    const paged = useMemo(() => {
        const pages: Product[][] = [];

        for(let i = 0; i < filtered.length; i += PAGE_SIZE) {
            pages.push(filtered.slice(i, i + PAGE_SIZE));
        }

        return pages;
    }, [filtered])

    return {
       pages: paged,
       hasNextPage: false,
       isLoading,
       error,
    };
}

