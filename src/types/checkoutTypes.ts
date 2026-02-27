import { Dispatch } from "react";
import { DeliveryMethod, PaymentMethod } from "./api/options";
import { OrderItem } from "./orderTypes";
import { CheckoutAction } from "../reducers/checkoutReducer/checkoutAction";

export type DataProps = {
  fullName: string | null;
  address: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  phone: string | null;
  email: string | null;
  notes?: string | null;
};

export type CheckoutItitial = {
  items: OrderItem[];
  shippingData: DataProps | null;
  delivery: DeliveryMethod | null;
  payment: PaymentMethod | null;
};

export type CheckoutContextType = CheckoutItitial & {
  updateItems: (items: OrderItem[]) => void;
  updateData: (data: DataProps) => void;
  updateDelivery: (data: DeliveryMethod) => void;
  updatePayment: (data: PaymentMethod) => void;
  resetCheckout: () => void;
};
