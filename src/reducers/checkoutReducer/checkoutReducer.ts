import { CHECKOUT_INITIAL } from "../../data/checkout";
import { CheckoutItitial } from "../../types/checkoutTypes";
import { CheckoutAction } from "./checkoutAction";

export function checkoutReducer(
  state: CheckoutItitial,
  action: CheckoutAction,
) {
  switch (action.type) {
    case "UPDATE_ITEMS":
      return { ...state, items: action.payload };
    case "UPDATE_DATA":
      return {
        ...state,
        shippingData: { ...state.shippingData, ...action.payload },
      };
    case "UPDATE_DELIVERY":
      return { ...state, delivery: action.payload };
    case "UPDATE_PAYMENT":
      return { ...state, payment: action.payload };
    case "RESET_CHECKOUT":
      return CHECKOUT_INITIAL;
    default:
      return state;
  }
}
