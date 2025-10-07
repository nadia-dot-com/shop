import { FaCartShopping } from "react-icons/fa6";

import classes from './ShopingCardIcon.module.css';
import { cn } from "../../utils/cn";

export function ShopingCardIcon({ active }: { active: boolean }) {

    return <FaCartShopping className={cn(classes.shopingCardIcon, active && classes.active)} />
}