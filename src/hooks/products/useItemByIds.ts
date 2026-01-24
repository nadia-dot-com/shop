import { useMemo } from "react";
import { useProducts } from "./useProducts"; 
import { Product } from "../../types/api/product"; 

export function useItemsByIds(ids: string[]) {
    const { data: products = [] } = useProducts();

    return useMemo(() => {
        const map = new Map(products.map(p=> [p.id, p]));

        return ids
            .map(id => map.get(id))
            .filter(Boolean) as Product[];
    }, [ids, products])
}