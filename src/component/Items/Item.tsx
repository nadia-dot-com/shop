import { cn } from '../../utils/cn';
import classes from './Item.module.css'
import type { ItemProps } from '../../types/types';
import { useShopContext } from '../../context/ShopContext';

export function Item(props: ItemProps) {
    const { title, img, desc, price } = props;
    const { addToOrder } = useShopContext();

    return (
        <div className={classes.item}>
            <img src={img} alt={title} className={classes.img} />
            <h2 className={classes.text} >{title}</h2>
            <p className={classes.text}>{desc}</p>
            <p className={classes.price}>{Number(price).toFixed(2)} PLN</p>
            <div className={cn(classes.addToCard)} onClick={() => addToOrder(props)}>+</div>
        </div>
    )
}