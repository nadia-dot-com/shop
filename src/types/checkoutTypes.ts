import { ItemProps } from "./shopTypes";

export type DataProps = {
    fullName: string;
    company?: string;
    address: {
        street: string;
        postalCode: string;
        city: string
        country: string;
    }
    phone: string;
    email: string;
    notes?: string;
}

export type PaymentProps = {
    method: 'cash' ;
}

export type DeliveryMethod = "free" | "flat" | "pickup" ;

export type DeliveryProps = {
    method: DeliveryMethod;
    price: number;
}

export type CheckoutContextProps = {
    items: ItemProps[];
    data: DataProps | null;
    delivery: DeliveryProps;
    payment: PaymentProps;

    updateItems: (items: ItemProps[]) => void;
    updateData: (data: DataProps) => void;
    updateDelivery: (data: DeliveryProps) => void;
    updatePayment: (data: PaymentProps) => void;
    resetCheckout: () => void;
}

export type CheckoutItitial = {
    items: ItemProps[];
    data: DataProps | null;
    delivery: DeliveryProps;
    payment: PaymentProps;
}