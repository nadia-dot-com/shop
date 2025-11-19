import { createContext, ReactNode, useState } from "react";
import { UserContextProps, UserData } from "../types/userTypes"; 
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { USER } from "../data/locatStorageKey";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext<UserContextProps | null >(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useLocalStorage<UserData | null>(USER, null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

    const toggleModalOpen = () => setIsLoginModalOpen((prev) => !prev);

    return (
        <UserContext.Provider
            value={{
                user,
                updateUser: setUser,
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