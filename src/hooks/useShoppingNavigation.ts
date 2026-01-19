import { useNavigate } from "react-router-dom";
import { useShopContext } from "../context/CartContext";
import { ROUTES } from "../config/Routes";
import { useCategoryContext } from "../context/CategoryContext";


export function useShoppingNavigation() {
    const { chooseCategory } = useCategoryContext();
    const navigate = useNavigate();

    const navigateToCategory = (category: string) => {
        const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
        navigate(`/${ROUTES.productCategory(categorySlug).toLowerCase()}`);
        chooseCategory(category)
    }

    return { navigateToCategory }
}