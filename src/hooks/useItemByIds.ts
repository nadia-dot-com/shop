import { useMemo } from "react";
import { useProducts } from "./useProducts";
import { Product } from "../types/api/product";

export function useItemsByIds(ids: string[]) {
    const {data: products = []} = useProducts();

    return useMemo(()=> {
        return ids
        .map(id => products.find(p => p.id === id))
        .filter(Boolean) as Product[];
    }, [ids, products])
}