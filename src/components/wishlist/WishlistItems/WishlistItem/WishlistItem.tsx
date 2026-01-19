import { useWishlist } from '../../../../hooks/wishlist/useWishlist';
import { Button } from '../../../../components/Button/Button';
import { useCartContext } from '../../../../context/CartContext';
import { Product } from '../../../../types/api/product';
import { useShoppingNavigation } from '../../../../hooks/useShoppingNavigation';
import { getDiscountPrice } from '../../../../utils/product';

import classes from './WishlistItem.module.css';

export function WishlistItem({ item }: { item: Product }) {
    const { id, name, imagesUrls, price, categoryName, stockQuantity } = item;
    const { toggleLike } = useWishlist(id);
    const { addToCart } = useCartContext();
    const { navigateToCategory } = useShoppingNavigation();

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

                <div className={classes.price}>
                    {item.discount <= 0 ?
                        <p>${Number(price).toFixed(2)}</p>
                        : <div>
                            <p className={classes.oldPrice}>${Number(price).toFixed(2)}</p>
                            <p className={classes.discountPrice}>${getDiscountPrice(price, item.discount)}</p>
                        </div>
                    }
                </div>

            </div>

            <div className={classes.button}>
                <Button
                    bgColor='#ddd'
                    textColor='black'
                    text='ADD TO CART'
                    onClick={() => addToCart(item)}
                    disabled={stockQuantity === 0}
                />
            </div>

            <button
                className={classes.addToCard}
                onClick={() => addToCart(item)}
                disabled={stockQuantity === 0}
            >
                +
            </button>
        </div>
    )
}