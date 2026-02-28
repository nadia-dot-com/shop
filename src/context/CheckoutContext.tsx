import { createContext, ReactNode, useReducer } from "react";
import { CheckoutContextType, DataProps } from "../types/checkoutTypes";
import { createContextHook } from "../hooks/createContextHook";
import { CHECKOUT_INITIAL } from "../data/checkout";
import { OrderItem } from "../types/orderTypes";
import { DeliveryMethod, PaymentMethod } from "../types/api/options";
import { checkoutReducer } from "../reducers/checkoutReducer/checkoutReducer";

export const CheckoutContext = createContext<CheckoutContextType | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(checkoutReducer, CHECKOUT_INITIAL);

  const updateItems = (items: OrderItem[]) =>
    dispatch({ type: "UPDATE_ITEMS", payload: items });

  const updateData = (data: DataProps) =>
    dispatch({ type: "UPDATE_DATA", payload: data });

  const updateDelivery = (data: DeliveryMethod) =>
    dispatch({ type: "UPDATE_DELIVERY", payload: data });

  const updatePayment = (data: PaymentMethod) =>
    dispatch({ type: "UPDATE_PAYMENT", payload: data });

  const resetCheckout = () => dispatch({ type: "RESET_CHECKOUT" });

  return (
    <CheckoutContext.Provider
      value={{
        ...state,

        updateItems,
        updateData,
        updateDelivery,
        updatePayment,
        resetCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

export const useCheckoutContext = createContextHook(
  CheckoutContext,
  CheckoutProvider,
);
