import { EmptyCard } from "../../EmptyCard/EmptyCard";
import { useCartContext } from "../../../context/CartContext";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { ShowOrder } from "./ShowOrder/ShowOrder";

import classes from "./OrderModal.module.css";

export function OrderModal() {
  const { cartItems, toggleCartOpen } = useCartContext();
  const refCallback = useClickOutside(toggleCartOpen);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Shopping cart"
      ref={refCallback}
      className={classes.orderModal}
    >
      {cartItems.length > 0 ? (
        <ShowOrder cartItems={cartItems} />
      ) : (
        <EmptyCard />
      )}
    </div>
  );
}
