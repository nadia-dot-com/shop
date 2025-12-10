import { useParams } from "react-router-dom";
import { Subtotal } from "../../../../../component/Subtotal/Subtotal";
import { useUserContext } from "../../../../../context/UserContext"
import { OrderList } from "../../ShoppingCart/CheckoutReview/CheckoutSections/OrderList/OrderList";

import classes from './OrderPage.module.css'
import { VatSection } from "../../ShoppingCart/CheckoutReview/CheckoutSections/VatSection";
import { TotalSection } from "../../ShoppingCart/CheckoutReview/CheckoutSections/TotalSection";
import { SHIPPING_LABELS } from "../../../../../data/checkout";
export function OrderPage() {
    const { orders } = useUserContext();
    const { orderId } = useParams();

    const order = orders.find(o => o.orderId === orderId);


    if (!order) return null;

    return (
        <div className={classes.wrap}>

            <OrderList order={order.items} />

            <Subtotal arr={order.items} />

            <VatSection vat={order.vat} />

            <div className={classes.checkoutSection}>
                <div>Shipping</div>
                <div>{SHIPPING_LABELS[order.delivery.method]} {' '}
                    ${order.delivery.price}
                </div>
            </div>

            <div className={classes.checkoutSection}>
                <div>Payment method</div>
                <div>{order.payment.method}</div>
            </div>

            <TotalSection total={order.total} />
        </div>
    )
}