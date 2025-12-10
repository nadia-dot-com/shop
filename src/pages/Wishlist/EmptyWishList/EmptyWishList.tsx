import { Button } from "../../../component/Button/Button";
import { TbShoppingBagHeart } from "react-icons/tb";

import classes from './EmptyWishList.module.css';
import { useShoppingNavigation } from "../../../hooks/useShoppingNavigation";
import { All } from "../../../data/categories";

export function EmptyWishList() {
const {navigateToCategory} = useShoppingNavigation();

    return (
        <div className={classes.empyWishlist}>
            There are no products on the Wishlist!
            <br />
            Look for the heart to save favorites while you shop.

        <TbShoppingBagHeart className={classes.bagIcon}/>

            <Button
                bgColor="black"
                textColor="white"
                text="START SHOPPING"
                onClick={()=> navigateToCategory(All)}
            />
        </div>
    )
}