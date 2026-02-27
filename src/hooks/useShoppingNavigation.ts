import { useNavigate } from "react-router-dom";
import { ROUTES } from "../config/Routes";
import { useCategoryContext } from "../context/CategoryContext";
import { slugity } from "../utils/slugify";

export function useShoppingNavigation() {
  const { setSelectedCategory } = useCategoryContext();
  const navigate = useNavigate();

  const navigateToCategory = (category: string, productId?: string) => {
    const categorySlug = slugity(category).toLowerCase();
    setSelectedCategory(category);

    if (productId) {
      const productSlug = slugity(productId).toLowerCase();
      navigate(`/${ROUTES.products}/${categorySlug}/${productSlug}`);
    } else {
      navigate(`/${ROUTES.products}/${categorySlug}`);
    }
  };

  return { navigateToCategory };
}
