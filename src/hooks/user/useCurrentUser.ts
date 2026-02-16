import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../../api/user.api";
import { UserData } from "../../types/userTypes";

const FIVE_MINUTES = 1000 * 60 * 5;

export const useCurrentUser = (token: string | null) => {
  return useQuery<UserData>({
    queryKey: ["currentUser", token],
    queryFn: () => fetchUser(token!),
    enabled: !!token,
    staleTime: FIVE_MINUTES,
    retry: false,
  });
};
