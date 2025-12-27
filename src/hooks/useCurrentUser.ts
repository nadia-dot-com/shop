import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "../api/user.api"

export const useCurrentUser = () => {
    const token = localStorage.getItem("token");

    return useQuery({
        queryKey: ["currentUser"],
        queryFn: fetchUser,
        enabled: !!token,
        retry: false,
    })
}