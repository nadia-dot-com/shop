import { OrderItem } from "../component/OrderItem/OrderItem";
import { ItemProps } from "../types/types"; 

import classes from "./ShowOrder.module.css";

export function ShowOrder({ arr }: { arr: ItemProps[] }) {
    const sum = arr.reduce((sum, item) => sum + Number(item.price), 0);

    return (
        <div>
            {arr.map(el => (
                <OrderItem key={el.id} {...el} />
            ))}
            <div className={classes.sum}>Razem: {sum.toFixed(2)} PLN</div>
        </div>
    )
}