import { createContext, ReactNode, useState } from "react";
import { CheckoutContextProps, CheckoutDataProps, PaymentProps } from "../types/checkoutTypes";
import { createContextHook } from "../hooks/createContextHook";
import { ItemProps } from "../types/shopTypes";


export const CheckoutContext = createContext<CheckoutContextProps | null>(null);

export function CheckoutProvider({ children }: { children: ReactNode }) {
    const [address, setAddress] = useState<CheckoutDataProps | null>(null);
    const [payment, setPayment] = useState<PaymentProps>({ method: null });
    const [items, setItems] = useState<ItemProps[]>([]);

    const updateAddress = (data: CheckoutDataProps) => {
        setAddress(prev => ({ ...prev, ...data }));
    }

    const updatePayment = (data: PaymentProps) => setPayment(data);

    const updateItems = (items: ItemProps[]) => setItems(items)

    return (
        <CheckoutContext.Provider
            value={{
                address,
                payment,
                items,

                updateAddress,
                updatePayment,
                updateItems
            }}
        >
            {children}
        </CheckoutContext.Provider>
    )
}

export const useCheckoutContext = createContextHook(CheckoutContext, CheckoutProvider)