import { ChangeEvent } from "react";

import classes from './QuantityInput.module.css';

export function QuantityInput({ 
    stock, 
    quantity,
    onChange,
}: { 
    stock: number, 
    quantity: number,
    onChange: (e: ChangeEvent<HTMLInputElement>)=> void,
}) {

    return (
        <input
            type="number"
            name="quantity"
            value={quantity}
            min="1"
            max={stock}
            className={classes.quantityInput}
            onChange={onChange}
        />
    )
}