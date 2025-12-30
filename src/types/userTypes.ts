import { Dispatch } from "react";
import { NewOrderProps, OrderProps } from "./orderTypes";
// import { OrderItem } from "./uiOrderTypes";

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

export type StatusProps =
  | "pending"
  | "processing"
  | "on-hold"
  | "completed"
  | "cancelled"
  | "refunded"
  | "failed"
  | "shipped"
  | "delivered";

export type UserContextProps = {
  user: UserData | null;
  isLoginModalOpen: boolean;
  orders: OrderProps[];
  userWishlist: string[];

  updateUser: Dispatch<React.SetStateAction<UserData | null>>;
  toggleModalOpen: () => void;
  addOrder: (data: NewOrderProps) => void;
  logout: () => void;
  toggleUserWishlist: (productId: string) => void;
  mergeUserWishlist: (wishlist: string[]) => void;
}