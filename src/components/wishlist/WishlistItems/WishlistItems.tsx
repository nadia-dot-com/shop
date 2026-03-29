import classes from "./WishlistItems.module.scss";
import { Product } from "@/types/api/product";
import { DataLoader } from "../../DataLoader/DataLoader";
import { EmptyWishList } from "../EmptyWishList/EmptyWishList";
import { WishlistItem } from "./WishlistItem/WishlistItem";

export function WishlistItems({ list, isLoading, error }: { list: Product[], isLoading: boolean, error: Error | null }) {
  
  const isEmpty = (list === null && !isLoading )|| (list.length === 0 && !isLoading);

  return (
    <DataLoader error={error} loading={isLoading} loaded={!!list}>
    <div>
      {isEmpty ? (
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
    </DataLoader>
  );
}
