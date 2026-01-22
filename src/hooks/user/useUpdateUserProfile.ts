import { useMutation } from "@tanstack/react-query";
import { updateUserProfile } from "../../api/user.api";
import { useUserContext } from "../../context/UserContext";
import { toast } from "react-toastify";
import { UserData } from "../../types/userTypes";
import { assert } from "../../utils/assert";

export const useUpdateUserProfile = () => {
    const { token, updateUser } = useUserContext();

    assert(token, "No token");

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
