import { useShopContext } from "../../../context/ShopContext";
import { CollectionProps, ItemProps } from "../../../types/types";
import { HotstopButton } from "../HotstopButton/HotstopButton";

import classes from './CollectionItem.module.css'
export function CollectionItem({ array }: { array: CollectionProps[] }) {

    const { items } = useShopContext();

    const collectionProducts: ItemProps[] = items.filter((item) => item.collection);

    return Array.from(array).map((item, i) => (
        <li className={classes.collectionItem} key={i}>
            <img className={classes.img} src={item.img} alt={item.title} />
            <div className={classes.title}>{item.title}</div>
            {item.hotspots.map((spot, j) => (
                collectionProducts.map(i => (
                    <HotstopButton top={spot.top} left={spot.left} item={i} key={j} />
                ))
            ))}

        </li>
    ))
}