import { Button } from "@/components/Button/Button";
import { TbShoppingBagHeart } from "react-icons/tb";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import { categoriesGroups } from "@/data/categories";
import classes from "./EmptyWishList.module.css";

export function EmptyWishList() {
  const { navigateToCategory } = useShoppingNavigation();

  return (
    <div className={classes.empyWishlist}>
      There are no products on the Wishlist!
      <br />
      Look for the heart to save favorites while you shop.
      <TbShoppingBagHeart className={classes.bagIcon} />
      <Button
        bgColor="#F6F6F3"
        textColor="black"
        text="START SHOPPING"
        onClick={() => navigateToCategory(categoriesGroups.all)}
      />
    </div>
  );
}
