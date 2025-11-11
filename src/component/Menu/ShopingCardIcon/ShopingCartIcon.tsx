import { FaCartShopping } from "react-icons/fa6";

import classes from './ShopingCardIcon.module.css';
import { cn } from "../../../utils/cn";
import { useShopContext } from "../../../context/ShopContext";
import { OrderQuantity } from "./OrderQuantity/OrderQuantity";

export function ShopingCardIcon({ active }: { active: boolean }) {
    const { order, toggleOrder } = useShopContext();

    return (
        <>
            <FaCartShopping
                className={cn(
                    classes.shopingCardIcon,
                    active && classes.active
                )}
                onClick={() => toggleOrder()}
            />
            {order.length > 0 &&
            <OrderQuantity/>
        }
        </>
    )
}