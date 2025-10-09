// import { cn } from '../../utils/cn';
import classes from './OrderItem.module.css'
import type { ItemProps } from '../../types/types';
import { useShopContext } from '../../context/ShopContext';
import { FaTrash } from "react-icons/fa6";

export function OrderItem(props: ItemProps) {
    const { title, img, price } = props;
    const { removeFromOrder } = useShopContext();

    return (
        <div className={classes.orderItem}>
            <img src={img} alt={title} className={classes.img} />
            <h2 className={classes.text} >{title}</h2>
            <p className={classes.price}>{Number(price).toFixed(2)} PLN</p>
            <FaTrash className={classes.removeFromCard} onClick={() => removeFromOrder(props)}>-</FaTrash>
        </div>
    )
}