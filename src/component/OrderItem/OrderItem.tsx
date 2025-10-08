// import { cn } from '../../utils/cn';
import classes from './OrderItem.module.css'
import type { ItemProps } from '../../types/types';
import { useShopContext } from '../../context/ShopContext';

export function OrderItem(props: ItemProps) {
    const { title, img, price } = props;
    const { removeFromOrder } = useShopContext();

    return (
        <div className={classes.orderItem}>
            <img src={img} alt={title} className={classes.img} />
            <h2 className={classes.text} >{title}</h2>
            <p className={classes.price}>{price}pln</p>
            <div className={classes.removeFromCard} onClick={() => removeFromOrder(props)}>-</div>
        </div>
    )
}