import { ItemProps } from "../../../types/shopTypes";
import { EmptyWishList } from "../EmptyWishList/EmptyWishList";
import { WishlistItem } from "./WishlistItem/WishlistItem";

import classes from './WishlistItems.module.css'

export function WishlistItems({ list }: { list: ItemProps[] }) {

    return (
        <div>
            {
                list.length === 0
                    ? <EmptyWishList />
                    : <ul className={classes.wishlist}>
                        {
                            list.map(item => (
                                <li className={classes.wishlistItem}>
                                    <WishlistItem item={item} />
                                </li>
                            ))
                        }
                    </ul>

            }
        </div>

    )
}