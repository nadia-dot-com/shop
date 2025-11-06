import { Dispatch } from "react";

export type UserData = {
  id: number;
  name: string;
  email: string;
}

export type UserContextProps = {
    user: UserData | null;
    setUser: Dispatch<React.SetStateAction<UserData | null>>;
    isLoginModalOpen: boolean;
    toggleModalOpen: () => void;
}