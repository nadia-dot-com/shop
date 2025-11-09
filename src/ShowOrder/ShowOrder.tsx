// import { FcGoogle } from "react-icons/fc";
import { Button } from "../component/Button/Button";
import { OrderItem } from "../component/OrderItem/OrderItem";
import { ItemProps } from "../types/shopTypes";

import classes from "./ShowOrder.module.css";
import { useShopContext } from "../context/ShopContext";

export function ShowOrder({ arr }: { arr: ItemProps[] }) {
    const { order, clearOrder } = useShopContext();
    const sum = arr.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

    return (
        <div >
            <div className={classes.cartTitle}>
                <p >
                    Cart ({order.length})
                </p>
                <button
                    className={classes.clearButton}
                    onClick={clearOrder}
                >
                    CLEAR
                </button>
            </div>
            {arr.map(el => (
                <OrderItem key={el.id} {...el} />
            ))}
            <div className={classes.sum}>Subtotal:
                <p>
                    {sum.toFixed(2)} $
                </p>
            </div>
            {/* <Button
                bgColor="black"
                textColor="white"
                text=" LOGIN WITH GOOGLE / COMPLETE A ORDER"
                onClick={() => { }}
            >
                <FcGoogle className={classes.googleIcon} />
            </Button> */}
            <Button
                bgColor="black"
                textColor="white"
                text="COMPLETE ORDER"
                onClick={() => { }}
            />
        </div>
    )
}