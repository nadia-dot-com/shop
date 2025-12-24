import classes from './PopularCategories.module.css';
import { PopularCategory } from './PopularCategory/PopularCategory';
import { LoadingSpinner } from '../../../components/LoadingSpinner/LoadingSpinner';
import { ErrorState } from '../../../components/ErrorState/ErrorState';
import { useCategories } from '../../../hooks/useCategories';

export function PopularCategories() {
 const { data: categories, isLoading, error } = useCategories();

    if (isLoading) {
        return <LoadingSpinner />
    }

    if (error) {
        return <ErrorState />
    }

    if (!categories) return null;
    return (
        <div className={classes.categoriesWrapper}>
            <div className={classes.popular}>Popular categories</div>
            <ul className={classes.categories} >
                {Array.from(categories).map((category, index) => (
                    < PopularCategory key={index} category={category} />
                ))}
            </ul>
        </div>
    )
}