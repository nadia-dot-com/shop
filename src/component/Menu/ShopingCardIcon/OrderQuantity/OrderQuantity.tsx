import { useShopContext } from "../../../../context/ShopContext"

import classes from './OrderQuantity.module.css';

export function OrderQuantity() {
    const {order} = useShopContext();

    const quantity = order.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className={classes.orderQuantity}>
            {quantity}
        </div>
    )
}