import { CategoryProps } from "../../../../types/shopTypes";
import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";

import classes from './PopularCategory.module.css';

export function PopularCategory({ category }: { category: CategoryProps }) {
    const {navigateToCategory} = useShoppingNavigation();

    return category && (
        <li className={classes.categoryItem}>
            <img
                src={category.img}
                alt={category.category}
                className={classes.img}
                onClick={() => navigateToCategory(category.category)}
            />
            <div className={classes.title} onClick={() => navigateToCategory(category.category)}>{category.category}</div>
        </li>
    )
}