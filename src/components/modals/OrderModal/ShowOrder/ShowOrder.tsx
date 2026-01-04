import { Button } from "../../../Button/Button";
import { OrderItemRow } from "../../../OrderItemRow/OrderItemRow";
import { useShopContext } from "../../../../context/ShopContext";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/Routes";
import { Subtotal } from "../../../Subtotal/Subtotal";
import { OrderItem } from "../../../../types/orderTypes";

import classes from "./ShowOrder.module.css";
import { LoginButton } from "../../../LoginButton/LoginButton";

export function ShowOrder({ orderItems }: { orderItems: OrderItem[] }) {
    const { clearOrder, toggleOrderModal } = useShopContext();
    const { user, updateUser } = useUserContext();
    const navigate = useNavigate();

    const handleOrder = () => {
        const path = `${ROUTES.userAccount}/${ROUTES.shoppingCart}`
        navigate(path);
        toggleOrderModal();
    }

    const handleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google";
    }

    return (
        <div className={classes.showOrderWrapper}>
            <div className={classes.cartTitle}>
                <h2 >
                    Cart ({orderItems.length})
                </h2>

                <button
                    className={classes.clearButton}
                    onClick={clearOrder}
                >
                    CLEAR
                </button>
            </div>
            <div className={classes.orderList}>
                {orderItems.map(el => (
                    <OrderItemRow key={el.id} product={el} />
                ))}
            </div>

            <div className={classes.subtotal}>
                <Subtotal arr={orderItems} />
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
                        <LoginButton login={handleLogin} text="Login with GOOGLE & complete a order" />
                    )
            }
        </div>
    )
}