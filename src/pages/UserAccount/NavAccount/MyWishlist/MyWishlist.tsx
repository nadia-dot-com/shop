import { useUserContext } from "../../../../context/UserContext";
import { WishlistItems } from "../../../../components/wishlist/WishlistItems/WishlistItems";
import { useItemsByIds } from "../../../../hooks/useItemByIds";

export function MyWishlist() {
const {userWishlist} = useUserContext();

const wishlistItems = useItemsByIds(userWishlist)

   return (
    <div>
       <WishlistItems  list={wishlistItems}/>     
    </div>
   ) 
} 