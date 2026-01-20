import { useQuery } from "@tanstack/react-query"
import { fetchUser } from "../../api/user.api";
import { UserData } from "../../types/userTypes";

export const useCurrentUser = (token: string | null) => {

    return useQuery<UserData>({
        queryKey: ["currentUser", token],
        queryFn: () => fetchUser(token!),
        enabled: !!token,
        staleTime: 1000 * 60 * 5,
        retry: false,
    })
}