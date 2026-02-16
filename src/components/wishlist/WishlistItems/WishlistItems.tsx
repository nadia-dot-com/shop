import { Product } from "../../../types/api/product";
import { EmptyWishList } from "../EmptyWishList/EmptyWishList";
import { WishlistItem } from "./WishlistItem/WishlistItem";

import classes from "./WishlistItems.module.css";

export function WishlistItems({ list }: { list: Product[] }) {
  return (
    <div>
      {list.length === 0 ? (
        <EmptyWishList />
      ) : (
        <ul className={classes.wishlist}>
          {list.map((item) => (
            <li key={item.id} className={classes.wishlistItem}>
              <WishlistItem item={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
