import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";
import { Category } from "../../../../types/api/category";

import classes from './PopularCategory.module.css';

export function PopularCategory({ category }: { category: Category }) {
    const { navigateToCategory } = useShoppingNavigation();

    return (
            <li className={classes.categoryItem}>
                <img
                    src={category.imageUrl}
                    alt={category.name}
                    className={classes.img}
                    onClick={() => navigateToCategory(category.name)}
                />
                <div className={classes.title} onClick={() => navigateToCategory(category.name)}>{category.name}</div>
            </li>
    )
}