import { useCartContext } from "../../../../context/CartContext"

import classes from './OrderQuantity.module.css';

export function OrderQuantity() {
    const { cartItems } = useCartContext();

    const quantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)

    return (
        <div className={classes.orderQuantity}>
            {quantity}
        </div>
    )
}