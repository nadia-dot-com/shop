import { useParams } from 'react-router-dom'
import classes from './ItemPage.module.css'
import { FullItem } from './FullItem';
import {useShopContext} from "../../../context/ShopContext.tsx";

export function ItemPage() {
    const { itemId } = useParams();

    const name = itemId?.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    const { items } = useShopContext();

    const item = items.find((i) => i.title === name);

    return (
        <div className={classes.itemPage}>
            {item && <FullItem {...item} />}
        </div>
    )
}