import { All, CATEGORIES, SALE } from "../../data/categories";
import { COLLECTION } from "../../data/collection";
import { cn } from "../../utils/cn";
import { useShoppingNavigation } from "../../hooks/useShoppingNavigation";
import { useToggle } from "../../hooks/useToggle";

import classes from './ProductNav.module.css';

export function ProductNav() {
    const [isOpen, setIsOpen] = useToggle(true);
    const { navigateToCategory } = useShoppingNavigation();

    const categories = new Set([All, SALE, ...CATEGORIES.map((i) => i.category), ...COLLECTION.map((i) => i.title)]);


    return (
        <div>
            <ul className={classes.desktopCategories}>
                {Array.from(categories).map((category, index) => (
                    <li
                        className={cn(
                            classes.category,
                            category === SALE && classes.saleCategory)}
                        key={index}
                        onClick={() => navigateToCategory(category)}>{category}</li>
                ))}
            </ul>

            <ul className={classes.mobileCategories}>
                <li
                    className={classes.categoryButton}
                    onClick={setIsOpen}
                >
                    Categories
               
                    {
                        isOpen ?
                            <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                <path d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" />
                            </svg>

                            : <svg className={classes.icon} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 3.8L3.8 4.5 7.3 8l-3.5 3.5.7.7L8 8.7l3.5 3.5.7-.7L8.7 8l3.5-3.5-.7-.7L8 7.3 4.5 3.8z"
                                    fill="currentColor" />
                            </svg>

                    }
                    </li>
                    {
                        isOpen ?
                            null
                            : Array.from(categories).map((category, index) => (
                                <li
                                    className={cn(
                                        classes.mobileCategory,
                                        category === SALE && classes.saleCategory)}
                                    key={index}
                                    onClick={() => navigateToCategory(category)}>{category}</li>
                            ))
                    }
    
            </ul>
        </div>


    )
}