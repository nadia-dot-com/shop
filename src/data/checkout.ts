import { CheckoutItitial, DeliveryMethod } from "../types/checkoutTypes";

export const SHIPPING_PRICES: Record<DeliveryMethod, number>= {
    free: 0,
    flat: 10,
    pickup: 0,
}

export const SHIPPING_LABELS: Record<DeliveryMethod, string> = {
    free: "Free Shipping",
    flat: "Flat Rate",
    pickup: "Local Pickup",
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