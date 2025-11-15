import { Dispatch } from "react";

export type UserData = {
  id: number;
  name: string;
  email: string;
  phone?: string;
  address?: {
     street: string;
     postalCode: string;
     city: string
  }
}

export type UserContextProps = {
    user: UserData | null;
    updateUser: Dispatch<React.SetStateAction<UserData | null>>;
    isLoginModalOpen: boolean;
    toggleModalOpen: () => void;
}