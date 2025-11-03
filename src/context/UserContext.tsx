import { createContext, ReactNode, useState } from "react";
import { UserContextProps } from "../types/types";
import { createContextHook } from "../hooks/createContextHook";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextProps | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

    const toggleModalOpen = () => setIsLoginModalOpen((prev)=> !prev);

    return (
        <UserContext.Provider
            value={{
                isLoginModalOpen,
                toggleModalOpen,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = createContextHook(UserContext, UserProvider);