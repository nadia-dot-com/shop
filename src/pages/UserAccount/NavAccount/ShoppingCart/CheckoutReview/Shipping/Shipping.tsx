import { SHIPPING_PRICES } from "../../../../../../data/checkout";
import { DeliveryProps } from "../../../../../../types/checkoutTypes";

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

            <div className={classes.option}>
                <label className={classes.label}>
                    <input
                        className={classes.radio}
                        type="radio"
                        name="shipping"
                        value="free"
                        checked={delivery.method === "free"}
                        onChange={() => handleChange("free")}
                    />
                    Free shipping</label>
                <p></p>
            </div>

            <div className={classes.option}>
                <label >
                    <input
                        className={classes.radio}
                        type="radio"
                        name="shipping"
                        value="flat"
                        checked={delivery.method === "flat"}
                        onChange={() => handleChange("flat")}
                    />
                    Flat rate:</label>
                <p>$10</p>
            </div>

            <div className={classes.option}>
                <label >
                    <input
                        className={classes.radio}
                        type="radio"
                        name="shipping"
                        value="pickup"
                        checked={delivery.method === "pickup"}
                        onChange={() => handleChange("pickup")}
                    />
                    Local pickup</label>
                <p></p>
            </div>
        </div>
    )
}