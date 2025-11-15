// import { FcGoogle } from "react-icons/fc";
import { Button } from "../../../component/Button/Button";
import { OrderItem } from "../OrderItem/OrderItem";
import { ItemProps } from "../../../types/shopTypes";

import classes from "./ShowOrder.module.css";
import { useShopContext } from "../../../context/ShopContext";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../config/Routes";

export function ShowOrder({ arr }: { arr: ItemProps[] }) {
    const { order, clearOrder, toggleOrder } = useShopContext();
    const { user } = useUserContext();
    const navigate = useNavigate();
    
    const sum = arr.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);

    const handleOrder = () => {
        const path = `${ROUTES.userAccount}/${ROUTES.shoppingCart}`
        navigate(path);
        toggleOrder();
    }

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
            <div className={classes.orderList}>
                {arr.map(el => (
                    <OrderItem key={el.id} {...el} />
                ))}
            </div>
            <div className={classes.sum}>Subtotal:
                <p>
                    {sum.toFixed(2)} $
                </p>
            </div>
            {
                user ?
                    (
                        <Button
                            bgColor="black"
                            textColor="white"
                            text="COMPLETE ORDER"
                            onClick={handleOrder}
                        />
                    ) :
                    (
                        <Button
                            bgColor="black"
                            textColor="white"
                            text=" LOGIN WITH GOOGLE & COMPLETE A ORDER"
                            onClick={() => { }}
                        >
                            <FcGoogle className={classes.googleIcon} />
                        </Button>
                    )
            }
        </div>
    )
}