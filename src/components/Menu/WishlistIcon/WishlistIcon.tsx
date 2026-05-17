import classes from "./WishlistIcon.module.scss";
import { IoIosHeart } from "react-icons/io";
import { StyledLink } from "@/components/StyledLink/StyledLink";
import { ROUTES } from "@/config/Routes";

export function WishlistIcon() {
  return (
    <StyledLink to={ROUTES.guestWishlist}>
      <IoIosHeart className={classes.wishlistIcon} aria-label="View wishlist" />
    </StyledLink>
  );
}
