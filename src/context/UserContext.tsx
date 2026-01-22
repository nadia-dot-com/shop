import { createContext, ReactNode, useEffect, useState } from "react";
import { UserContextProps, UserData } from "../types/userTypes";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { USER } from "../data/locatStorageKey";
import { useCurrentUser } from "../hooks/user/useCurrentUser";
import { useToggle } from "../hooks/useToggle";

export const UserContext = createContext<UserContextProps | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"))
    const [user, setUser] = useLocalStorage<UserData | null>(USER, null);
    const [isLoginModalOpen, setIsLoginModalOpen] = useToggle(false);
    const { data, isLoading, error } = useCurrentUser(token);

    useEffect(() => {
        if (isLoading) return;

        if (data) {
            setUser(data);
        } else {
            setUser(null)
        }
    }, [data, isLoading]);

    useEffect(() => {
        if (isLoginModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = ''
        }
    }, [isLoginModalOpen])

    const logout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem(USER);
        setUser(null);
        setToken(null);
    };

    return (
        <UserContext.Provider
            value={{
                user,
                token,
                updateToken: setToken,
                isLoginModalOpen,
                updateUser: setUser,
                toggleModalOpen: setIsLoginModalOpen,
                logout,
                isLoading,
                error
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = createContextHook(UserContext, UserProvider);