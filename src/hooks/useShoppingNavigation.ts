import { useNavigate } from "react-router-dom";
import { ROUTES } from "../config/Routes";
import { useCategoryContext } from "../context/CategoryContext";


export function useShoppingNavigation() {
    const { setSelectedCategory } = useCategoryContext();
    const navigate = useNavigate();

    const navigateToCategory = (category: string) => {
        const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
        navigate(`/${ROUTES.productCategory(categorySlug).toLowerCase()}`);
        setSelectedCategory(category)
    }

    return { navigateToCategory }
}