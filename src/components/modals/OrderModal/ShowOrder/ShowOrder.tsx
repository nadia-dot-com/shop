import { Button } from "../../../Button/Button";
import { OrderItemRow } from "../../../OrderItemRow/OrderItemRow";
import { useShopContext } from "../../../../context/ShopContext";
import { FcGoogle } from "react-icons/fc";
import { useUserContext } from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/Routes";
import { Subtotal } from "../../../Subtotal/Subtotal";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { OrderItem } from "../../../../types/orderItem";

import classes from "./ShowOrder.module.css";

export function ShowOrder({ orderItems }: { orderItems: OrderItem[] }) {
    const { clearOrder, toggleOrderModal } = useShopContext();
    const { user, updateUser } = useUserContext();
    const navigate = useNavigate();

    const handleOrder = () => {
        const path = `${ROUTES.userAccount}/${ROUTES.shoppingCart}`
        navigate(path);
        toggleOrderModal();
    }

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`
                        },
                    }
                );

                if (res.data.email_verified) {
                    updateUser(res.data);
                    handleOrder();
                }
            } catch (error) {
                console.log("Error fetching user info", error);
            }
        },
        onError: () => {
            console.log("❌ Login failed");
        },
    })

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
                        <Button
                            bgColor="black"
                            textColor="white"
                            text=" LOGIN WITH GOOGLE & COMPLETE A ORDER"
                            onClick={login}
                        >
                            <FcGoogle className={classes.googleIcon} />
                        </Button>
                    )
            }
        </div>
    )
}