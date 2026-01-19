import { useCartContext } from "../../context/CartContext";
import { useEffect, useRef, useState } from "react";
import { Button } from "../Button/Button";
import { QuantityInput } from "../QuantityInput/QuantityInput";
import { useShoppingNavigation } from "../../hooks/useShoppingNavigation";
import { SaleLabel } from "../SaleLabel/SaleLabel";
import { cn } from "../../utils/cn";
import { checkProductDate } from "../../utils/checkProductDate";
import { NewProductLabel } from "../NewProductLabel/NewProductLabel";
import { useWishlist } from "../../hooks/wishlist/useWishlist";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { Product } from "../../types/api/product";
import { getDiscountPrice, isProductInStock, isProductOnSale } from "../../utils/product";

import classes from './ProductDetails.module.css';

export function ProductDetails({ product }: { product: Product }) {
    const { name, imagesUrls, fullDescription, price, stockQuantity, id, categoryName, releaseDate, discount } = product;
    const [mainImg, setMainImg] = useState<string>(imagesUrls[0]);

    const [quantityValue, setQuantity] = useState(1);

    const { addToCart } = useCartContext();
    const { navigateToCategory } = useShoppingNavigation();

    const { liked, toggleLike } = useWishlist(id);

    const [activeIndex, setActiveIndex] = useState<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    const isOnSale = isProductOnSale(product);

    useEffect(() => {
        setMainImg(imagesUrls[0])
    }, [imagesUrls]);

    useEffect(() => {
        if (!isProductInStock) setQuantity(0);
        else setQuantity(prev => Math.min(prev || 1, stockQuantity));
    }, [stockQuantity]);


    const handleScroll = () => {
        const el = containerRef.current;
        if (!el) return;

        const width = el.clientWidth;
        const scrollLeft = el.scrollLeft;

        const index = Math.round(scrollLeft / width);
        setActiveIndex(index);
    }

    return (
        <div className={cn(classes.productDetails, !isProductInStock(stockQuantity) && classes.productDisabled)}>

            <div className={classes.desktopContainer}>
                <div className={classes.labels}>
                    {isOnSale &&
                        <SaleLabel />
                    }
                    {checkProductDate(releaseDate) &&
                        <NewProductLabel />
                    }
                </div>
                <img
                    src={mainImg}
                    alt={name}
                    className={classes.mainImg}
                />
                <div className={classes.imgContainer}>
                    {imagesUrls.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`${name} ${i}`}
                            className={classes.img}
                            onClick={() => setMainImg(src)}
                        />
                    ))
                    }
                </div>
            </div>
            <div className={classes.mobileContainer}>
                <div className={classes.labels}>
                    {isOnSale &&
                        <SaleLabel />
                    }
                    {checkProductDate(releaseDate) &&
                        <NewProductLabel />
                    }
                </div>
                <div
                    className={classes.mobileImgs}
                    ref={containerRef}
                    onScroll={handleScroll}
                >
                    {imagesUrls.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`${name} ${i}`}
                            className={classes.mobileImg}
                        />
                    ))
                    }
                </div>

                {imagesUrls.length > 1 &&
                    <div className={classes.dots}>
                        {imagesUrls.map((_, i) => (
                            <div
                                key={i}
                                className={cn(classes.dot, activeIndex === i && classes.active)}
                            />
                        ))}
                    </div>
                }
            </div>
            <div className={classes.container}>
                <h2 className={classes.title}>{name}
                    <span>
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
                    </span>

                </h2>
                <p className={cn(classes.price)}>
                    {discount <= 0 ?
                        <p>${Number(price).toFixed(2)}</p>
                        : <div>
                            <p className={classes.oldPrice}>${Number(price).toFixed(2)}</p>
                            <p className={classes.discountPrice}>${getDiscountPrice(price, discount).toFixed(2)}</p>
                        </div>
                    }
                </p>
                <div className={classes.quantityContainer}>
                    <QuantityInput
                        quantity={quantityValue}
                        stock={stockQuantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <Button
                        disabled={!isProductInStock(stockQuantity)}
                        bgColor="black"
                        textColor="white"
                        text="ADD TO ORDER"
                        onClick={() => {
                            addToCart(product, quantityValue);
                        }}
                    />
                </div>
                <p className={classes.desc}>{fullDescription}</p>
            </div>
            <div
                className={classes.closeBth}
                onClick={() => navigateToCategory(categoryName)}
            >
                ✕
            </div>
        </div>
    )
}