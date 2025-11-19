import { CheckoutItitial, DeliveryProps, PaymentProps } from "../types/checkoutTypes";

export const SHIPPING_PRICES = {
    free: 0,
    flat: 10,
    pickup: 0,
    null: 0,
}

export const DEFAULT_VAT = 0;

export const VAT_RATES = new Map<string, number>();

export const CHECKOUT_INITIAL: CheckoutItitial = {
    items: [],
    data: null,
    delivery: {
        method: "free",
        price: 0
    },
    payment: {
        method: "cash"
    },
}