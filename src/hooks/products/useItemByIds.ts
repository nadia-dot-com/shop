import { useMemo } from "react";
import { useProducts } from "./useProducts";
import { Product } from "../../types/api/product";

export function useItemsByIds(ids: string[]) {
  const { data: products = [], error, isLoading } = useProducts();

  return useMemo(() => {
    const productMap = new Map(products.map((p) => [p.id, p]));
    const productsByIds = ids.map((id) => productMap.get(id)).filter(Boolean) as Product[];
    return {productMap, productsByIds, error, isLoading};
  }, [ids, products]);
}
