import { Items } from "../component/Items/Items";
import { useShopContext } from "../context/ShopContext";

import classes from './ProductsPage.module.css';

export function ProductsPage() {
    const { items } = useShopContext()
    return (
        <div className={classes.itemsContainer}>
            <Items items={items} />
        </div>
    )
}