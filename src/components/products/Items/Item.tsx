import { cn } from '../../../utils/cn';
import classes from './Item.module.css'
import type { ItemProps } from '../../../types/shopTypes';
import { useShopContext } from '../../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { SaleLabel } from '../../SaleLabel/SaleLabel';
import { getImagePath } from '../../../utils/getImagePath';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { useWishlist } from '../../../hooks/useWishlist';
import { checkProductDate } from '../../../utils/checkProductDate';
import { NewProductLabel } from '../../NewProductLabel/NewProductLabel';

export function Item(props: ItemProps) {
    const { id, title, img, shortDesc, price, stock, isOnSale, category, createdAt } = props;
    const { addToOrder, chooseCategory } = useShopContext();
    const { liked, toggleLike } = useWishlist(id);

    const navigate = useNavigate();
    const path = title.toLowerCase().replace(/ /g, "-");
    const categoryPath = category.toLowerCase();

    const handleClick = () => {
        navigate(`${categoryPath}/${path}`);
        chooseCategory(category);
    };

    return (
        <div className={cn(classes.item, stock === 0 && classes.disableItem)}>

            <div className={classes.labels}>
                {isOnSale &&
                    <SaleLabel />
                }
                {checkProductDate(createdAt) &&
                    <NewProductLabel />
                }
            </div>

            <img src={getImagePath(img[0])} alt={title} className={classes.img} onClick={() => handleClick()} />

            {
                liked ?
                    <IoIosHeart
                        className={classes.wishlistButton}
                        onClick={toggleLike}
                    />
                    : <IoIosHeartEmpty
                        className={classes.wishlistButton}
                        onClick={toggleLike}
                    />
            }

            <div className={classes.productInformation}>
                <h3
                    className={classes.title}
                    onClick={() => handleClick()}
                >
                    {title}

                    <span className={classes.categoryTitle}>
                        {props.collection && ` | ${props.collection}`}
                    </span>

                </h3>

                <p>{shortDesc}</p>
                <p className={cn(classes.price, isOnSale && classes.salePrice)}>${Number(price).toFixed(2)}</p>

                <button
                    className={cn(classes.addToCard)}
                    onClick={() => addToOrder(props)}
                    disabled={stock === 0}
                >
                    +
                </button>

            </div>

        </div>
    )
}