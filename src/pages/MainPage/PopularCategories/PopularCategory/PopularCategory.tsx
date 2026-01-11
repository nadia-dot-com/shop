import { useShoppingNavigation } from "../../../../hooks/useShoppingNavigation";

import classes from './PopularCategory.module.css';
import { Category } from "../../../../types/api/category";
import { useCategories } from "../../../../hooks/useCategories";
import { LoadingSpinner } from "../../../../components/LoadingSpinner/LoadingSpinner";
import { ErrorState } from "../../../../components/ErrorState/ErrorState";
import { ERROR_MESSAGES } from "../../../../constants/messages";

export function PopularCategory({ category }: { category: Category }) {
    const { data: categories, isLoading, error } = useCategories();
    const { navigateToCategory } = useShoppingNavigation();

    if (isLoading) return <LoadingSpinner />

    if (error) return <ErrorState message={ERROR_MESSAGES.GENERIC}/>

    if (!categories) return <ErrorState message={ERROR_MESSAGES.NOT_FOUND}/>;

    return category && (
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