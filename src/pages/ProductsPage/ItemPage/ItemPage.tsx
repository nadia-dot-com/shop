import { useParams } from 'react-router-dom'
import classes from './ItemPage.module.css'
import { FullItem } from './FullItem';
import {useShopContext} from "../../../context/ShopContext.tsx";
import { slugity } from '../../../utils/slugify.ts';

export function ItemPage() {
    const { itemId } = useParams();

    const name = itemId?.toLowerCase() ?? "";

    const { items } = useShopContext();

    const item = items.find((i) => slugity(i.title) === name);

    return (
        <div className={classes.itemPage}>
            {item && <FullItem {...item} />}
        </div>
    )
}

