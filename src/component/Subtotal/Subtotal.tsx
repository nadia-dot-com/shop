import { ItemProps } from "../../types/shopTypes";
import { getSubtotal } from "../../utils/getSubtotal";

import classes from './Subtotal.module.css'

export function Subtotal({ arr, }: { arr: ItemProps[] }) {

    const sum = getSubtotal(arr);

    return (
        <div className={classes.subtotal}>Subtotal:
                <p>
                    {sum.toFixed(2)} $
                </p>
            </div>
    )
}