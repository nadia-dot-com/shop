import { DataProps, DeliveryProps, PaymentProps } from "./checkoutTypes";
import { ItemProps } from "./shopTypes";

export type OrderProps = {
  items: ItemProps[] ;
  data: DataProps;
  delivery: DeliveryProps;
  payment: PaymentProps;
}

export type OrdersContextProps = {
    orders: OrderProps[];
    addOrder: (data: OrderProps) => void;
}