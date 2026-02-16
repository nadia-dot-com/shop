import { FaCartShopping } from "react-icons/fa6";
import classes from "./EmptyCard.module.css";

export function EmptyCard() {
  return (
    <h2 className={classes.emptyCard}>
      No products in the cart
      <FaCartShopping className={classes.shopingIcon} />
    </h2>
  );
}
