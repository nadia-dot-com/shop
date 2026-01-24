import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useUserContext } from "../../context/UserContext";
import { fetchAddToWiszlist } from "../../api/wishlist.api";

export const useAddToWishlist = () => {
    const { token } = useUserContext();
    const qc = useQueryClient();

    return useMutation({
        mutationFn: async (productsIds: string[]) => {
            if (!token) {
                throw new Error("No token");
            };

            fetchAddToWiszlist(productsIds, token)
        },
        onSuccess: () => qc.invalidateQueries({ queryKey: ["wishlist"] }),
    })
}