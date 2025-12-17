import { OrderList } from "./CheckoutSections/OrderList/OrderList";
import { Payment } from "./CheckoutSections/Payment/Payment";
import { Subtotal } from "../../../../../components/Subtotal/Subtotal";
import { ItemProps } from "../../../../../types/shopTypes";

import classes from './CheckoutReview.module.css'
import { Shipping } from "./CheckoutSections/Shipping/Shipping";
import { DeliveryProps, PaymentProps } from "../../../../../types/checkoutTypes";
import { VatSection } from "./CheckoutSections/VatSection";
import { TotalSection } from "./CheckoutSections/TotalSection";

export function CheckoutReview({
    order,
    delivery,
    payment,
    total,
    vat,
    updateDelivery,
    updatePayment,
}: {
    order: ItemProps[],
    delivery: DeliveryProps,
    payment: PaymentProps,
    total: number,
    vat: number,
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

            <VatSection vat={vat} />

            <TotalSection total={total} />
        </div>
    )
}