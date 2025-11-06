import { Item } from "./Item";
import type { ItemProps } from "../../types/shopTypes";

import classes from './Items.module.css';

export function Items({ items }: { items: ItemProps[] }) {
   return (
      <div className={classes.items}>
         {items.map(el => (
            <Item key={el.id} {...el} />
         ))}
      </div>
   )
}