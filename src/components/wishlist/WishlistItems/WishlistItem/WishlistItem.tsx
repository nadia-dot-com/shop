import { useWishlist } from '../../../../hooks/useWishlist';
import classes from './WishlistItem.module.css'
import { Button } from '../../../../components/Button/Button';
import { useShopContext } from '../../../../context/ShopContext';
import { Product } from '../../../../types/api/product';
import { useShoppingNavigation } from '../../../../hooks/useShoppingNavigation';

export function WishlistItem({ item }: { item: Product }) {
    const { id, name, imagesUrls, price, categoryName, stockQuantity } = item;
    const { toggleLike } = useWishlist(id);
    const { addToOrder } = useShopContext();
    const {navigateToCategory} = useShoppingNavigation();

    return (
        <div className={classes.wishlistItem}>
            <div className={classes.wrapOne}>
                <div className={classes.closeBth}
                    onClick={toggleLike}
                >
                    ✕
                </div>

                <img
                    src={imagesUrls[0]}
                    alt={name}
                    className={classes.img}
                    onClick={() => navigateToCategory(categoryName)}
                />

            </div>
            <div className={classes.itemInfo}>
                <h4
                    className={classes.text}
                    onClick={() => navigateToCategory(categoryName)}
                >
                    {name}
                </h4>

                <p className={classes.price}>
                    ${Number(price).toFixed(2)}
                </p>

            </div>

            <div className={classes.button}>
                <Button
                    bgColor='#ddd'
                    textColor='black'
                    text='ADD TO CART'
                    onClick={() => addToOrder(item)}
                    disabled={stockQuantity === 0}
                />
            </div>

            <button
                className={classes.addToCard}
                onClick={() => addToOrder(item)}
                disabled={stockQuantity === 0}
            >
                +
            </button>
        </div>
    )
}