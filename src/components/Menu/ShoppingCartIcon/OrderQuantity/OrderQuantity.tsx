import classes from "./OrderQuantity.module.scss";
import { useCartContext } from "@/context/CartContext";
import { sumBy } from "lodash";

export function OrderQuantity() {
  const { cartItems } = useCartContext();

  const quantity = sumBy(cartItems, "quantity");

  return <div className={classes.orderQuantity}>{quantity}</div>;
}
