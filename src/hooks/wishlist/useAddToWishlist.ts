import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API_URL } from "../../api/config";
import { useUserContext } from "../../context/UserContext";

export const useAddToWishlist = () => {
    const { token } = useUserContext();
    const qc = useQueryClient();

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