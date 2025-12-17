import { FaCartShopping } from "react-icons/fa6";

import classes from './ShopingCardIcon.module.css';
import { cn } from "../../../utils/cn";
import { useShopContext } from "../../../context/ShopContext";
import { OrderQuantity } from "./OrderQuantity/OrderQuantity";

export function ShopingCardIcon({ active }: { active: boolean }) {
    const { order, toggleOrderModal } = useShopContext();

    return (
        <div>
            <FaCartShopping
                className={cn(
                    classes.shopingCardIcon,
                    active && classes.active
                )}
                onClick={() => toggleOrderModal()}
            />
            {order.length > 0 &&
                <OrderQuantity />
            }
        </div>
    )
}