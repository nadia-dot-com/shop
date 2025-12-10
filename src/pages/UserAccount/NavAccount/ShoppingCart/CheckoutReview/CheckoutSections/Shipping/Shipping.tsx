import { SHIPPING_LABELS, SHIPPING_PRICES } from "../../../../../../../data/checkout";
import { DeliveryMethod, DeliveryProps } from "../../../../../../../types/checkoutTypes";

import classes from './Shipping.module.css';

export function Shipping({ delivery, updateDelivery }: { delivery: DeliveryProps, updateDelivery: (data: DeliveryProps) => void }) {

    const handleChange = (method: DeliveryProps["method"]) => {
        updateDelivery({
            method,
            price: method ? SHIPPING_PRICES[method] : 0
        })
    }

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Shipping</h3>

            {(Object.keys(SHIPPING_LABELS) as DeliveryMethod[]).map(method => (
                <div className={classes.option}>
                    <label className={classes.label}>
                        <input
                            className={classes.radio}
                            type="radio"
                            name="shipping"
                            value="free"
                            checked={delivery.method === method}
                            onChange={() => handleChange(method)}
                        />
                        {SHIPPING_LABELS[method]}</label>
                    <p className={classes.price}>${SHIPPING_PRICES[method]}</p>
                </div>
            ))}

        </div>
    )
}