import { OrderList } from "./OrderList/OrderList";
import { Payment } from "./Payment/Payment";
import { Subtotal } from "../../../../../component/Subtotal/Subtotal";
import { ItemProps } from "../../../../../types/shopTypes";

import classes from './CheckoutReview.module.css'
import { Shipping } from "./Shipping/Shipping";
import { DeliveryProps, PaymentProps } from "../../../../../types/checkoutTypes";

export function CheckoutReview({
    order,
    delivery,
    payment,
    total,
    updateDelivery,
    updatePayment,
}: {
    order: ItemProps[],
    delivery: DeliveryProps,
    payment: PaymentProps,
    total: number
    updateDelivery: (data: DeliveryProps) => void,
    updatePayment: (data: PaymentProps) => void,
}) {


    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Order Summary</h2>

            <OrderList order={order} />

            <Subtotal arr={order} />

            <Shipping delivery={delivery} updateDelivery={updateDelivery} />

            <Payment payment={payment} updatePayment={updatePayment} />

            <div className={classes.checkoutSection}>
                <h2>VAT</h2>
                <h2>$0</h2>
            </div>

            <div className={classes.checkoutSection}>
                <h2>Total</h2>
                <h2>{total}</h2>
            </div>
        </div>
    )
}