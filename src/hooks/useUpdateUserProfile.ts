import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../api/user.api";
import { useUserContext } from "../context/UserContext";
import { toast } from "react-toastify";

export const useUpdateUserProfile = () => {
    const { updateUser } = useUserContext();

    return useMutation({
        mutationFn: updateUserProfile,
        onSuccess: (updatedUser) => {
            updateUser(updatedUser);
            toast.success("Provile saved!");
        },
        onError: () => {
            toast.error("Failed to save profile")
        },
    });
}
