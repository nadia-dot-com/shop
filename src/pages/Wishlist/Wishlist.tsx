import { useShopContext } from '../../context/ShopContext';
import { useUserContext } from '../../context/UserContext';
import { getItemList } from '../../utils/getItemList';
import { WishlistItems } from '../../components/wishlist/WishlistItems/WishlistItems'; 

import classes from './Wishlist.module.css';

export function Wishlist() {
    const { user, userWishlist } = useUserContext();
    const {  guestWishlist } = useShopContext();

    const wishlistIds = user
        ? userWishlist
        : guestWishlist;

    return (
        <div className={classes.guestWishlistContainer}>

            <div className={classes.wishlistWrapper}>
                <h1 className={classes.title}>
                    Wishlist
                </h1>

               <WishlistItems list={getItemList(wishlistIds)}/>
            </div>

        </div>
    )
}