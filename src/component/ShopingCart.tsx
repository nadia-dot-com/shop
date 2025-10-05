import { FaCartShopping } from "react-icons/fa6";

import classes from './ShopingCard.module.css';
import { cn } from "../utils/cn";

export function ShopingCard({active}: {active: boolean}) {

    return <FaCartShopping className={cn(classes.shopingCard, active && classes.active)} />
}