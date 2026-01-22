import { Button } from "../../../Button/Button";
import { OrderItemRow } from "../../../OrderItemRow/OrderItemRow";
import { useCartContext } from "../../../../context/CartContext";
import { useUserContext } from "../../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../../config/Routes";
import { Subtotal } from "../../../Subtotal/Subtotal";
import { OrderItem } from "../../../../types/orderTypes";
import { LoginButton } from "../../../LoginButton/LoginButton";
import { useItemsByIds } from "../../../../hooks/products/useItemByIds";

import classes from "./ShowOrder.module.css";

export function ShowOrder({ orderItems }: { orderItems: OrderItem[] }) {
    const { clearCart, toggleCartOpen } = useCartContext();
    const { user } = useUserContext();
    const navigate = useNavigate();
    const products = useItemsByIds(orderItems.map(i => i.id));

    const handleOrder = () => {
        const path = `${ROUTES.userAccount}/${ROUTES.shoppingCart}`
        navigate(path);
        toggleCartOpen();
    }

    return (
        <div className={classes.showOrderWrapper}>
            <div className={classes.cartTitle}>
                <h2 >
                    Cart ({orderItems.length})
                </h2>

                <button
                    className={classes.clearButton}
                    onClick={clearCart}
                >
                    CLEAR
                </button>
            </div>
            <div className={classes.orderList}>
                {orderItems.map(item => {
                    const product = products.find(p => p.id === item.id);

                    if (!product) return null;

                    return (
                        <OrderItemRow
                            key={item.id}
                            product={item}
                            stockQuantity={product.stockQuantity}
                        />
                    );
                })}
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
                        <LoginButton text="Login with GOOGLE & complete a order" />
                    )
            }
        </div>
    )
}