import { useCartContext } from "../../context/CartContext";
import { FaTrash } from "react-icons/fa6";
import { QuantityInput } from "../QuantityInput/QuantityInput";
import { OrderItem } from "../../types/orderTypes";
import { getDiscountPrice } from "../../utils/product";
import { cn } from "../../utils/cn";
import classes from "./OrderItemRow.module.css";
import { useShoppingNavigation } from "../../hooks/useShoppingNavigation";

export function OrderItemRow({
  product,
  stockQuantity,
}: {
  product: OrderItem;
  stockQuantity: number;
}) {
  const { id, name, img, price, quantity, categoryName, discount } = product;
  const { removeFromCart, updateQuantity } = useCartContext();
  const { navigateToCategory } = useShoppingNavigation();

  return (
    <div className={classes.orderItem}>
      <div className={classes.itemInfo}>
        <div
          className={classes.text}
          onClick={() => navigateToCategory(categoryName, name)}
        >
          {name}
        </div>
        <img
          src={img}
          alt={name}
          className={classes.img}
          onClick={() => navigateToCategory(categoryName, name)}
          width="126"
          height="150"
        />
      </div>
      <QuantityInput
        quantity={quantity}
        stock={stockQuantity}
        onChange={(e) =>
          updateQuantity(id, Number(e.target.value), stockQuantity)
        }
      />

      <div className={cn(classes.price, discount > 0 && classes.discountPrice)}>
        Price:
        <br />
        {discount > 0 ? (
          <p>${getDiscountPrice(price, discount)}</p>
        ) : (
          <p>${Number(price).toFixed(2)}</p>
        )}
      </div>

      <div className={cn(classes.price, discount > 0 && classes.discountPrice)}>
        Subtotal:
        <br />
        {discount > 0 ? (
          <p>${(getDiscountPrice(price, discount) * quantity).toFixed(2)}</p>
        ) : (
          <p>${(Number(price) * quantity).toFixed(2)}</p>
        )}
      </div>
      <FaTrash
        className={classes.removeFromCard}
        onClick={() => removeFromCart(id)}
      >
        -
      </FaTrash>
    </div>
  );
}
