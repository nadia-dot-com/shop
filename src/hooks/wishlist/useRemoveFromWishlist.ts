import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API_URL } from "../../api/config";
import { useUserContext } from "../../context/UserContext";
import { assert } from "../../utils/assert";

export const useRemoveFromWishlist = () => {
    const { token } = useUserContext();
    const qc = useQueryClient();

     assert(token, "No token");

    return useMutation({
        mutationFn: (productId: string) =>
            fetch(`${API_URL}/user/wishlist/remove-product`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ productId }),
            }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] })
    })
}