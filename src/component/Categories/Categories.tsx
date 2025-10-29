import { useNavigate } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext"
import { All, CATEGORIES, SALE } from "../../data/categories";
import { COLLECTION } from "../../data/collection";
import { cn } from "../../utils/cn";

import classes from './Categories.module.css';

export function Categories() {
    const { chooseCategory } = useShopContext();
    const navigate = useNavigate();

    const categories = new Set([All, SALE, ...CATEGORIES.map((i) => i.category), ...COLLECTION.map((i) => i.title)]);

    const handleCategoryClick = (category: string) => {
        const categorySlug = category.toLowerCase().replace(/\s+/g, "-");
        navigate(`/products/${categorySlug}`);
        chooseCategory(category);
    }

    return (
        <ul className={classes.categories}>
            {Array.from(categories).map((category, index) => (
                <li
                    className={cn(
                        classes.categoryTitle,
                        category === SALE && classes.saleCategory)}
                    key={index} 
                    onClick={() => handleCategoryClick(category)}>{category}</li>
            ))}
        </ul>
    )
}