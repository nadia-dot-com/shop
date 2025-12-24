import { useQuery, useQueryClient } from "@tanstack/react-query"
import { Product } from "../types/api/product";
import { fetchProducts } from "../api/products.api";

export const useProductById = (id: string) => {
  const queryClient = useQueryClient();

  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      let products = queryClient.getQueryData<Product[]>(['products']);

      if (!products) {
        products = await fetchProducts();
        queryClient.setQueryData(['products'], products);
      }
    
      return products.find(p => p.id === id) ?? null;
    },
    enabled: !!id,
  });
};
