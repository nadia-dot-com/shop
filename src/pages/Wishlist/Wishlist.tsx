import { useShopContext } from '../../context/ShopContext';
import { useUserContext } from '../../context/UserContext';
import { WishlistItems } from '../../components/wishlist/WishlistItems/WishlistItems'; 

import classes from './Wishlist.module.css';
import { useItemsByIds } from '../../hooks/useItemByIds';

export function Wishlist() {
    const { user, userWishlist } = useUserContext();
    const {  guestWishlist } = useShopContext();

    const wishlistIds = user
        ? userWishlist
        : guestWishlist;
        
    const wishlistItems = useItemsByIds(wishlistIds);
    
    return (
        <div className={classes.guestWishlistContainer}>

            <div className={classes.wishlistWrapper}>
                <h1 className={classes.title}>
                    Wishlist
                </h1>

               <WishlistItems list={wishlistItems}/>
            </div>

        </div>
    )
}