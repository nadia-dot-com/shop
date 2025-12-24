import { CollectionItemProps } from "../../../../types/collectionUi";
import { Hotspot } from "../Hotspot/Hotspot";

import classes from './CollectionItem.module.css';

export function CollectionItem({ collectionItem }: { collectionItem: CollectionItemProps }) {

    return (
        <li className={classes.collectionItem}>
            <img className={classes.img} src={collectionItem.img} alt={collectionItem.name} />
            <div className={classes.title}>{collectionItem.name}</div>
            {collectionItem.hotspots.map((spot, j) => (
                <Hotspot top={spot.top} left={spot.left} productId={spot.productId} key={j} />
            ))}

        </li>
    )
}