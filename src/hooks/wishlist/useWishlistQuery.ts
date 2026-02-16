import { useQuery } from "@tanstack/react-query";
import { fetchWishlist } from "../../api/wishlist.api";
import { fetchProducts } from "../../api/products.api";
import { Product } from "../../types/api/product";
import { useUserContext } from "../../context/UserContext";

export const useWishlistQuery = () => {
  const { token } = useUserContext();

  return useQuery<Product[], Error>({
    queryKey: ["wishlist"],
    queryFn: async () => {
      if (!token) {
        throw new Error("No token");
      }

      const wishlist = await fetchWishlist(token);
      const products = await fetchProducts();

      const productMap = new Map(products.map((p) => [p.id, p]));

      const isProduct = (p: Product | undefined): p is Product => Boolean(p);

      return wishlist.map((w) => productMap.get(w.id)).filter(isProduct);
    },
    enabled: !!token,
  });
};
