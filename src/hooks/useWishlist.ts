import { useCallback } from "react";
import { useShopContext } from "../context/ShopContext";
import { useUserContext } from "../context/UserContext";


export function useWishlist (id: string) {
    const { guestWishlist, toggleGuestWishlist } = useShopContext();
    const { user, userWishlist, toggleUserWishlist } = useUserContext();

    const liked = user
        ? userWishlist.includes(id)
        : guestWishlist.includes(id);

    const toggleLike = useCallback(() => {
        if (user) {
            toggleUserWishlist(id);
        } else {
            toggleGuestWishlist(id)
        }
    }, [user, id, toggleUserWishlist, toggleGuestWishlist]);

    return {liked, toggleLike}
}