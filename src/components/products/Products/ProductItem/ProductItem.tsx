import { cn } from '../../../../utils/cn';
import { useShopContext } from '../../../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { SaleLabel } from '../../../SaleLabel/SaleLabel';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { useWishlist } from '../../../../hooks/useWishlist';
import { checkProductDate } from '../../../../utils/checkProductDate';
import { NewProductLabel } from '../../../NewProductLabel/NewProductLabel';
import { Product } from '../../../../types/api/product';
import { getDiscountPrice, isProductInStock } from '../../../../utils/product';

import classes from './ProductItem.module.css';

export function ProductItem({ product }: { product: Product }) {
    const { id, name, imagesUrls, shortDescription, price, stockQuantity, discount, categoryName, releaseDate } = product;
    const { addToOrder, chooseCategory } = useShopContext();
    const { liked, toggleLike } = useWishlist(id);

    const navigate = useNavigate();
    const path = name.toLowerCase().replace(/ /g, "-");
    const categoryPath = categoryName.toLowerCase();

    const QUANTITY = 1;

    const handleClick = () => {
        navigate(`${categoryPath}/${path}`);
        chooseCategory(categoryName);
    };


    return (
        <div className={cn(classes.product, !isProductInStock(stockQuantity) && classes.disableProduct)}>

            <div className={classes.labels}>
                {discount > 0 &&
                    <SaleLabel />
                }
                {checkProductDate(releaseDate) &&
                    <NewProductLabel />
                }
            </div>

            <img src={imagesUrls[0]} alt={name} className={classes.img} onClick={() => handleClick()} />

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
                    {name}

                    <span className={classes.categoryTitle}>
                        {product.collectionName && ` | ${product.collectionName}`}
                    </span>

                </h3>

                <p>{shortDescription}</p>
                <div className={classes.price}>
                    {discount <= 0 ?
                        <p>${Number(price).toFixed(2)}</p>
                        : <div>
                            <p className={classes.oldPrice}>${Number(price).toFixed(2)}</p>
                            <p className={classes.discountPrice}>${getDiscountPrice(price, discount)}</p>
                        </div>
                    }
                </div>

                <button
                    className={classes.addToCard}
                    onClick={() => addToOrder(product, QUANTITY)}
                    disabled={!isProductInStock(stockQuantity)}
                >
                    +
                </button>

            </div>

        </div>
    )
}