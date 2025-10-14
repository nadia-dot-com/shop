import { useShopContext } from "../../context/ShopContext"
import { all, INITIAL_ITEMS } from "../../data/items/items";

import classes from './Categories.module.css';

export function Categories() {
    const { chooseCategory } = useShopContext();

    const categories = new Set([all, ...INITIAL_ITEMS.map((i) => i.category)]);

    return (
        <ul className={classes.categories}>
            {Array.from(categories).map((category, index) => (
                <li className={classes.categoryTitle} key={index} onClick={()=> chooseCategory(category)}>{category}</li>
            ))}
        </ul>
    )
}