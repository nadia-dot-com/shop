import { OrderItem } from "../types/orderTypes"
import { getDiscountSubtotal } from "./getSubtotals";
import { getVAT } from "./getVAT";
import { roundMoney } from "./roundMoney";

type Args = {
    order: OrderItem[];
    deliveryPrice: number;
    vatRate: number;
}

export function calculateCheckoutPrice({
    order,
    deliveryPrice,
    vatRate,
}: Args) {
    const subtotal = getDiscountSubtotal(order);

    const vat = roundMoney(getVAT(subtotal, vatRate));

    const total = roundMoney(subtotal + deliveryPrice + vat);

    return {
        subtotal,
        vat,
        total
    }
}
