import { useShopContext } from "../../context/ShopContext"

import classes from './Categories.module.css';

export function Categories() {
    const { items } = useShopContext();

    const categories = new Set(items.map((i) => i.category));

    return (
        <ul className={classes.categories}>
            {Array.from(categories).map((category, index) => (
                <li className={classes.categoryTitle} key={index}>{category}</li>
            ))}
        </ul>
    )
}