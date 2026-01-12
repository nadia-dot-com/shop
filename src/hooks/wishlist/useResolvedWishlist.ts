import { useShopContext } from "../../context/ShopContext";
import { useUserContext } from "../../context/UserContext";
import { useItemsByIds } from "../useItemByIds";
import { useWishlistQuery } from "./useWishlistQuery";

export const useResolvedWishlist = () => {
    const { guestWishlist } = useShopContext();
    const { user } = useUserContext();

    const { data: userWishlist = [] } = useWishlistQuery();
    const guestWishlistItems = useItemsByIds(guestWishlist);

    return user ? userWishlist : guestWishlistItems;
}