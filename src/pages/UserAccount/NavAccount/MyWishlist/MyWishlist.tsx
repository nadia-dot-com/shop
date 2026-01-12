import { WishlistItems } from "../../../../components/wishlist/WishlistItems/WishlistItems";
import { useWishlistQuery } from "../../../../hooks/wishlist/useWishlistQuery";

export function MyWishlist() {
const {data: wishlist = []} = useWishlistQuery();

   return (
    <div>
       <WishlistItems  list={wishlist}/>     
    </div>
   ) 
} 