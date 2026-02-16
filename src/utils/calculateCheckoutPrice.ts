import { OrderItem } from "../types/orderTypes";
import { getDiscountSubtotal } from "./getSubtotals";
import { getVAT } from "./getVAT";
import { roundMoney } from "./roundMoney";

type Args = {
  cartItems: OrderItem[];
  deliveryPrice: number;
  vatRate: number;
};

export function calculateCheckoutPrice({
  cartItems,
  deliveryPrice,
  vatRate,
}: Args) {
  const subtotal = getDiscountSubtotal(cartItems);

  const vat = roundMoney(getVAT(subtotal, vatRate));

  const total = roundMoney(subtotal + deliveryPrice + vat);

  return {
    subtotal,
    vat,
    total,
  };
}
