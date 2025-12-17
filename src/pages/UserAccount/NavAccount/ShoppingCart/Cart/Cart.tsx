import { OrderItem } from "../../../../../components/OrderItem/OrderItem";
import { ItemProps } from "../../../../../types/shopTypes";

import classes from './Cart.module.css';

export function Cart({ order }: { order: ItemProps[] }) {

    return (
        <ul className={classes.orderList}>
            {
                order.map((el) => (
                    <li className={classes.orderItem}>
                        <OrderItem key={el.id} {...el} />
                    </li>
                ))
            }
        </ul>
    )
}