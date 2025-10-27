import { useShopContext } from "../../context/ShopContext"
import { All, CATEGORIES } from "../../data/categories";
import { COLLECTION } from "../../data/collection";

import classes from './Categories.module.css';

export function Categories() {
    const { chooseCategory } = useShopContext();

    const categories = new Set([All, ...CATEGORIES.map((i) => i.category), ...COLLECTION.map((i)=> i.title)]);

    return (
        <ul className={classes.categories}>
            {Array.from(categories).map((category, index) => (
                <li className={classes.categoryTitle} key={index} onClick={() => chooseCategory(category)}>{category}</li>
            ))}
        </ul>
    )
}