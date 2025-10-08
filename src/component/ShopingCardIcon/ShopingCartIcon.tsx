import { FaCartShopping } from "react-icons/fa6";

import classes from './ShopingCardIcon.module.css';
import { cn } from "../../utils/cn";
import { useShopContext } from "../../context/ShopContext";

export function ShopingCardIcon({ active }: { active: boolean }) {
    const { toggleOrder } = useShopContext();
    return <FaCartShopping className={cn(classes.shopingCardIcon, active && classes.active)} onClick={() => toggleOrder()} />
}