import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API_URL } from "../../api/config";
import { useUserContext } from "../../context/UserContext";
import { assert } from "../../utils/assert";

export const useAddToWishlist = () => {
    const { token } = useUserContext();
    const qc = useQueryClient();

    assert(token, "No token");

    return useMutation({
        mutationFn: (productsIds: string[]) =>
            fetch(`${API_URL}/user/wishlist/add-products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ productsIds }),
            }),
        onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
    })
}