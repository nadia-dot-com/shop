import { useNavigate, useParams } from 'react-router-dom';
import { useWishlist } from '../../../../hooks/useWishlist';
import { ItemProps } from '../../../../types/shopTypes';
import classes from './WishlistItem.module.css'
import { ROUTES } from '../../../../config/Routes';
import { getImagePath } from '../../../../utils/getImagePath';
import { Button } from '../../../../component/Button/Button';
import { useShopContext } from '../../../../context/ShopContext';
import { slugity } from '../../../../utils/slugify';

export function WishlistItem({ item }: { item: ItemProps }) {
    const { id, title, img, price, category, stock } = item;
    const { toggleLike } = useWishlist(id);
    const { addToOrder, chooseCategory } = useShopContext();

    const navigate = useNavigate();
    const path = slugity(title);
    const categoryPath = category.toLowerCase();

    const handleClick = () => {
        navigate(`/${ROUTES.products}/${categoryPath}/${path}`);
        chooseCategory(category);
    };

    return (
        <div className={classes.wishlistItem}>
            <div className={classes.wrapOne}>
                <div className={classes.closeBth}
                    onClick={toggleLike}
                >
                    ✕
                </div>

                {/* <div className={classes.itemImg}> */}

                <img
                    src={getImagePath(img[0])}
                    alt={title}
                    className={classes.img}
                    onClick={() => handleClick()}
                />

                {/* </div> */}
            </div>
            <div className={classes.itemInfo}>
                <h4
                    className={classes.text}
                    onClick={() => handleClick()}
                >
                    {title}
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
                    disabled={stock === 0}
                />
            </div>

            <button
                className={classes.addToCard}
                onClick={() => addToOrder(item)}
                disabled={stock === 0}
            >
                +
            </button>
        </div>
    )
}