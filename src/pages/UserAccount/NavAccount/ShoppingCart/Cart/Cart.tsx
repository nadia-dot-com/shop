import { OrderItemRow } from "../../../../../components/OrderItemRow/OrderItemRow";
import { OrderItem } from "../../../../../types/orderTypes";

import classes from './Cart.module.css';

export function Cart({ order }: { order: OrderItem[] }) {

    return (
        <ul className={classes.orderList}>
            {
                order.map((el) => (
                    <li className={classes.orderItem} key={el.id}>
                        <OrderItemRow product={el} />
                    </li>
                ))
            }
        </ul>
    )
}