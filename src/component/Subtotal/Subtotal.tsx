import { ItemProps } from "../../types/shopTypes";
import { getSubtotal } from "../../utils/getSubtotal";

import classes from './Subtotal.module.css'

export function Subtotal({ arr, }: { arr: ItemProps[] }) {

    const sum = getSubtotal(arr);

    return (
        <section className={classes.subtotalSection}>
            Subtotal:
            <p>
                {sum.toFixed(2)} $
            </p>
        </section>
    )
}