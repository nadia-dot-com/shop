import { ItemProps } from "./shopTypes";

export type CheckoutDataProps = {
    firstName: string;
    lastName: string;
    company?: string;
    country: string;
    address: {
        street: string;
        postalCode: string;
        city: string
    }
    phone: string;
    email: string;
    notes?: string;
}

export type PaymentProps = {
    method: "card" | 'paypal' | 'cash' | null;
}

export type CheckoutContextProps = {
    address: CheckoutDataProps | null;
    payment: PaymentProps;
    items: ItemProps[];

    updateAddress: (data: CheckoutDataProps) => void;
    updatePayment: (data: PaymentProps) => void;
    updateItems: (items: ItemProps[]) => void;
}