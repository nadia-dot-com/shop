import { OrderList } from "./CheckoutSections/OrderList/OrderList";
import { Payment } from "./CheckoutSections/Payment/Payment";
import { Subtotal } from "../../../../../components/Subtotal/Subtotal";
import { Shipping } from "./CheckoutSections/Shipping/Shipping";
import { DeliveryProps, PaymentProps } from "../../../../../types/checkoutTypes";
import { VatSection } from "./CheckoutSections/VatSection/VatSection";
import { TotalSection } from "./CheckoutSections/TotalSection/TotalSection";

import classes from './CheckoutReview.module.css'
import { OrderItem } from "../../../../../types/orderItem";

export function CheckoutReview({
    order,
    delivery,
    payment,
    total,
    vat,
    updateDelivery,
    updatePayment,
}: {
    order: OrderItem[],
    delivery: DeliveryProps,
    payment: PaymentProps,
    total: number,
    vat: number,
    updateDelivery: (data: DeliveryProps) => void,
    updatePayment: (data: PaymentProps) => void,
}) {

    const discount = order.some(el => el.discount >= 0) 

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Order Summary</h2>

            <OrderList order={order} />

            <Subtotal arr={order} />

            <Shipping delivery={delivery} updateDelivery={updateDelivery} />

            <Payment payment={payment} updatePayment={updatePayment} />

            <VatSection vat={vat} />

            <TotalSection total={total} discount={discount} />
        </div>
    )
}