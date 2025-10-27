import classes from './PopularCategories.module.css';
import { CATEGORIES } from "../../data/categories";
import { PopularCategory } from './PopularCategory/PopularCategory';

export function PopularCategories() {

    return (
        <div className={classes.categoriesWrapper}>
            <div className={classes.popular}>Popular categories</div>
            <ul className={classes.categories} >
                {Array.from(CATEGORIES).map((category, index) => (
                    < PopularCategory key={index} category={category} />
                ))}
            </ul>
        </div>
    )
}