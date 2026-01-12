import { Dispatch } from "react";
import { OrderResponse } from "./api/order.response";

export type UserData = {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  postalCode?: string | null;
  city?: string | null;
  country?: string | null;
}

export type UserContextProps = {
  user: UserData | null;
  isLoginModalOpen: boolean;
  orders: OrderResponse[];

  updateUser: Dispatch<React.SetStateAction<UserData | null>>;
  toggleModalOpen: () => void;
  addOrder: (order: OrderResponse) => void;
  logout: () => void;
}