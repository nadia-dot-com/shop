import { useNavigate } from "react-router-dom";
import { ROUTES } from "../config/Routes";
import { useCategoryContext } from "../context/CategoryContext";
import { slugity } from "../utils/slugify";

export function useShoppingNavigation() {
  const { setSelectedCategory } = useCategoryContext();
  const navigate = useNavigate();

  const navigateToCategory = (category: string) => {
    const categorySlug = slugity(category);
    navigate(`/${ROUTES.productCategory(categorySlug).toLowerCase()}`);
    setSelectedCategory(category);
  };

  return { navigateToCategory };
}
