import { useParams } from 'react-router-dom'
import classes from './ItemPage.module.css'
import { FullItem } from './FullItem';
import { INITIAL_ITEMS } from '../data/items';

export function ItemPage() {
    const { itemId } = useParams();

    const name = itemId?.replace(/-/g, ' ').replace(/^./, c => c.toUpperCase());
    const item = INITIAL_ITEMS.find((i) => i.title === name);

    return (
        <div className={classes.itemPage}>
            {item && <FullItem {...item} />}
        </div>
    )
}