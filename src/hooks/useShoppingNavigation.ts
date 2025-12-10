import { useNavigate } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import { ROUTES } from "../config/Routes";


export function useShoppingNavigation() {
    const {chooseCategory} = useShopContext();
    const navigate = useNavigate();

    const navigateToCategory= (category: string) => {
        const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
        navigate(`/${ROUTES.productCategory(categorySlug).toLowerCase()}`); 
        chooseCategory(category)
    }

    return {navigateToCategory}
}