import { useShopContext } from "../../context/ShopContext";
import { useUserContext } from "../../context/UserContext";
import { useAddToWishlist } from "./useAddToWishlist";
import { useRemoveFromWishlist } from "./useRemoveFromWishlist";
import { useWishlistQuery } from "./useWishlistQuery";

export function useWishlist(productId: string) {
    const { guestWishlist, toggleGuestWishlist } = useShopContext();
    const { user } = useUserContext();

    const {data: wishlist = []} = useWishlistQuery();
    const add = useAddToWishlist();
    const remove = useRemoveFromWishlist();

    const liked = user
    ? wishlist.some(item => item.id === productId)
    : guestWishlist.includes(productId);

    const toggleLike = () => {
        if(!user) {
            toggleGuestWishlist(productId);
            return;
        }

        liked
        ? remove.mutate(productId)
        : add.mutate([productId])
    };

    return {liked, toggleLike}
}
