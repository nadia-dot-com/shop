import { useShopContext } from "../../../../../context/ShopContext"
import { OrderItem } from "../../../../OrderModal/OrderItem/OrderItem";

import classes from './Cart.module.css';

export function Cart() {
    const { order } = useShopContext();

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