import { createContext, ReactNode, useState } from "react";
import { CheckoutContextProps, CheckoutItitial, DataProps, DeliveryProps, PaymentProps } from "../types/checkoutTypes";
import { createContextHook } from "../hooks/createContextHook";
import { ItemProps } from "../types/shopTypes";
import { CHECKOUT_INITIAL } from "../data/checkout";


export const CheckoutContext = createContext<CheckoutContextProps | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<ItemProps[]>(CHECKOUT_INITIAL.items);
    const [data, setData] = useState<DataProps | null>(CHECKOUT_INITIAL.data);
    const [delivery, setDelivery] = useState<DeliveryProps>(CHECKOUT_INITIAL.delivery);
    const [payment, setPayment] = useState<PaymentProps>(CHECKOUT_INITIAL.payment);

    const updateItems = (items: ItemProps[]) => setItems(items);

    const updateData = (data: DataProps) => setData(prev => ({ ...prev, ...data }));

    const updateDelivery = (data: DeliveryProps) => setDelivery(data);

    const updatePayment = (data: PaymentProps) => setPayment(data);

    const resetCheckout = () => {
        setItems(CHECKOUT_INITIAL.items)
        setData(CHECKOUT_INITIAL.data);
        setDelivery(CHECKOUT_INITIAL.delivery);
        setPayment(CHECKOUT_INITIAL.payment);
    }
    return (
        <CheckoutContext.Provider
            value={{
                items,
                data,
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