import { DeliveryMethod, PaymentMethod } from "../../types/api/options";
import { DataProps } from "../../types/checkoutTypes";
import { OrderItem } from "../../types/orderTypes";

export type CheckoutAction =
  | { type: "UPDATE_ITEMS"; payload: OrderItem[] }
  | { type: "UPDATE_DATA"; payload: DataProps }
  | { type: "UPDATE_DELIVERY"; payload: DeliveryMethod }
  | { type: "UPDATE_PAYMENT"; payload: PaymentMethod }
  | { type: "RESET_CHECKOUT"};
