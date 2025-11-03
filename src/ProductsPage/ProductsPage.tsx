import { Outlet,  useParams } from "react-router-dom";
import { Items } from "./Items/Items";
import { useShopContext } from "../context/ShopContext";

import classes from './ProductsPage.module.css';
import { cn } from "../utils/cn";
import { Categories } from "../component/Categories/Categories";

export function ProductsPage() {
    const { items } = useShopContext();
    const {itemId} = useParams();

    return (
        <div >
            <Categories/>
            <div style={{position: 'relative'}}>
                <Outlet />
            </div>
            <div className={cn(classes.itemsContainer, itemId && classes.itemPageOpen)}>
                <Items items={items} />
            </div>
        </div>
    )
}