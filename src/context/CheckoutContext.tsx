import { createContext, ReactNode, useState } from "react";
import { CheckoutContextProps, DataProps } from "../types/checkoutTypes";
import { createContextHook } from "../hooks/createContextHook";
import { CHECKOUT_INITIAL } from "../data/checkout";
import { OrderItem } from "../types/orderTypes";
import { DeliveryMethod, PaymentMethod } from "../types/api/options";

export const CheckoutContext = createContext<CheckoutContextProps | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<OrderItem[]>(CHECKOUT_INITIAL.items);
    const [shippingData, setData] = useState<DataProps | null>(CHECKOUT_INITIAL.shippingData);
    const [delivery, setDelivery] = useState<DeliveryMethod | null>(CHECKOUT_INITIAL.delivery);
    const [payment, setPayment] = useState<PaymentMethod | null>(CHECKOUT_INITIAL.payment);

    const updateItems = (items: OrderItem[]) => setItems(items);

    const updateData = (data: DataProps) => setData(prev => ({ ...prev, ...data }));

    const updateDelivery = (data: DeliveryMethod) => setDelivery(data);

    const updatePayment = (data: PaymentMethod) => setPayment(data);

    const resetCheckout = () => {
        setItems(CHECKOUT_INITIAL.items)
        setData(CHECKOUT_INITIAL.shippingData);
        setDelivery(CHECKOUT_INITIAL.delivery);
        setPayment(CHECKOUT_INITIAL.payment);
    }
    return (
        <CheckoutContext.Provider
            value={{
                items,
                shippingData,
                delivery,
                payment,

                updateItems,
                updateData,
                updateDelivery,
                updatePayment,
                resetCheckout,
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export const useCheckoutContext = createContextHook(CheckoutContext, CheckoutProvider)