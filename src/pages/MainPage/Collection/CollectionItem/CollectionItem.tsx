import { CollectionProps } from "../../../types/shopTypes";
import { Hotspot } from "../Hotspot/Hotspot";

import classes from './CollectionItem.module.css';

export function CollectionItem({ array }: { array: CollectionProps[] }) {

    return Array.from(array).map((item, i) => (
        <li className={classes.collectionItem} key={i}>
            <img className={classes.img} src={item.img} alt={item.title} />
            <div className={classes.title}>{item.title}</div>
            {item.hotspots.map((spot, j) => (
                <Hotspot top={spot.top} left={spot.left} productId={spot.productId} key={j} />
            ))}

        </li>
    ))
}