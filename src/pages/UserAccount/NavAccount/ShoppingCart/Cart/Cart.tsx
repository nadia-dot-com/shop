import { OrderItemRow } from "../../../../../components/OrderItemRow/OrderItemRow";
import { OrderItem } from "../../../../../types/orderTypes";

import classes from './Cart.module.css';

export function Cart({ cartItems }: { cartItems: OrderItem[] }) {

    return (
        <ul className={classes.orderList}>
            {
                cartItems.map((el) => (
                    <li className={classes.orderItem} key={el.id}>
                        <OrderItemRow product={el} />
                    </li>
                ))
            }
        </ul>
    )
}