import { useUserContext } from "../../../../context/UserContext";
import { getItemList } from "../../../../utils/getItemList";
import { WishlistItems } from "../../../../components/wishlist/WishlistItems/WishlistItems";

export function MyWishlist() {
const {userWishlist} = useUserContext();

   return (
    <div>
       <WishlistItems  list={getItemList(userWishlist)}/>     
    </div>
   ) 
} 