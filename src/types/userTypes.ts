import { Dispatch } from "react";
import { DataProps, DeliveryProps, PaymentProps } from "./checkoutTypes";
import { ItemProps } from "./shopTypes";

export type UserData = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  }
}

export type OrdersProps = {
  items: ItemProps[] ;
  data: DataProps;
  delivery: DeliveryProps;
  payment: PaymentProps;
}

export type UserContextProps = {
  user: UserData | null;
  updateUser: Dispatch<React.SetStateAction<UserData | null>>;
  isLoginModalOpen: boolean;
  toggleModalOpen: () => void;
}