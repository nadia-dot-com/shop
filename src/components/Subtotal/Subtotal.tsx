import { OrderItem } from "../../types/orderTypes";
import { getDiscountSubtotal, getSubtotal } from "../../utils/getSubtotals";

import classes from './Subtotal.module.css'

export function Subtotal({ arr, }: { arr: OrderItem[] }) {

    const discount = arr.find(el => el.discount > 0);

    return (
        <section className={classes.subtotalSection}>
            Subtotal:
            <div className={classes.price}>
                {discount ?
                    <div>
                        <p className={classes.oldPrice}>${getSubtotal(arr).toFixed(2)}</p>
                        <p className={classes.discountPrice}>${getDiscountSubtotal(arr).toFixed(2)}</p>
                    </div>
                    : <p>${getSubtotal(arr).toFixed(2)}</p>
                }
            </div>
        </section>
    )
}