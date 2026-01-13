import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "../api/user.api"
import { UserData } from "../types/userTypes";

export const useCurrentUser = () => {
    const token = localStorage.getItem("token");

    return useQuery<UserData>({
        queryKey: ["currentUser"],
        queryFn: () => fetchUser(token!),
        enabled: !!token,
        retry: false,
    })
}