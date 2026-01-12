import { useMutation, useQueryClient } from "@tanstack/react-query"
import { API_URL } from "../../api/config";

export const useAddToWishlist = ()  => {
    const qc = useQueryClient();

    return useMutation({
        mutationFn: (productsIds: string[]) =>
            fetch(`${API_URL}/user/wishlist/add-products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({productsIds}),
            }),
            onSuccess: () => qc.invalidateQueries({queryKey: ["wishlist"]}),
    })
}