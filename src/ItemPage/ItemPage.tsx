import { useParams } from 'react-router-dom'
import classes from './ItemPage.module.css'
import { useShopContext } from '../context/ShopContext';
import { FullItem } from './FullItem';

export function ItemPage() {
    const {itemId} = useParams();
    const {items} = useShopContext();

    const name = itemId?.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase());
    const item = items.find((i) => i.title === name);

    return (
        <div className={classes.itemPage}>
           {item && <FullItem {...item}/>}
        </div>
    )
}