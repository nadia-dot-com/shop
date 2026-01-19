import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../api/user.api";
import { useUserContext } from "../context/UserContext";
import { toast } from "react-toastify";
import { UserData } from "../types/userTypes";

export const useUpdateUserProfile = () => {
    const { token, updateUser } = useUserContext();

    if (!token) {
        throw new Error("No token");
    }

    return useMutation({
        mutationFn: (data: Partial<UserData>) =>
            updateUserProfile(token, data),
        onSuccess: (updatedUser) => {
            updateUser(updatedUser);
            toast.success("Provile saved!");
        },
        onError: () => {
            toast.error("Failed to save profile")
        },
    });
}
