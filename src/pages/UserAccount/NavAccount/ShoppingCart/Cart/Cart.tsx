import { OrderItemRow } from "../../../../../components/OrderItemRow/OrderItemRow";
import { OrderItem } from "../../../../../types/orderItem";

import classes from './Cart.module.css';

export function Cart({ order }: { order: OrderItem[] }) {

    return (
        <ul className={classes.orderList}>
            {
                order.map((el) => (
                    <li className={classes.orderItem}>
                        <OrderItemRow key={el.id} product={el} />
                    </li>
                ))
            }
        </ul>
    )
}