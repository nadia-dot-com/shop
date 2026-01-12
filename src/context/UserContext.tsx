import { createContext, ReactNode, useEffect, useState } from "react";
import { UserContextProps, UserData } from "../types/userTypes";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { USER } from "../data/locatStorageKey";
import { useCurrentUser } from "../hooks/useCurrentUser";

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useLocalStorage<UserData | null>(USER, null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
    const { data } = useCurrentUser();

    useEffect(() => {
        if (data) {
            setUser(data);
        }
    }, [data])

    const toggleModalOpen = () => setIsLoginModalOpen((prev) => !prev);

    const logout = () => setUser(null);

    return (
        <UserContext.Provider
            value={{
                user,
                isLoginModalOpen,

                updateUser: setUser,
                toggleModalOpen,
                logout,
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = createContextHook(UserContext, UserProvider);