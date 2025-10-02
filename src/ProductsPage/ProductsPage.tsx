import { Items } from "../component/Items/Items";
import { items } from "../data/items/items";

import classes from './ProductsPage.module.css';

export function ProductsPage() {
    return (
        <div className={classes.itemsContainer}>
            <Items items={items} />
        </div>
    )
}