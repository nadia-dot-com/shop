import { useProducts } from "../../../../hooks/products/useProducts";
import { Collection, HotSpotProps } from "../../../../types/api/collection";
import { Hotspot } from "../Hotspot/Hotspot";

import classes from "./CollectionItem.module.css";

export function CollectionItem({
  collectionItem,
}: {
  collectionItem: Collection;
}) {
  const { data: products = [], isLoading } = useProducts();

  if (isLoading || !products) return null;

  const hotspots: HotSpotProps[] = collectionItem.presentation.hotspots ?? [];

  return (
    <li className={classes.collectionItem}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.img}
          src={collectionItem.presentation.imageUrl}
          alt={collectionItem.name}
        />
        <div className={classes.title}>{collectionItem.name}</div>
        {hotspots.map((spot) => (
          <Hotspot
            top={spot.top}
            left={spot.left}
            productId={spot.productId}
            products={products}
            key={spot.productId}
          />
        ))}
      </div>
    </li>
  );
}
