import { CheckoutItitial } from "../types/checkoutTypes";

export const DEFAULT_VAT = 0;

export const VAT_RATES = new Map<string, number>();

export const CHECKOUT_INITIAL: CheckoutItitial = {
    items: [],
    shippingData: null,
    delivery: null,
    payment: null,
}