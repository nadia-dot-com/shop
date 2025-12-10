import { useShopContext } from "../../../context/ShopContext";
import { ItemProps } from "../../../types/shopTypes";
import { useEffect, useState } from "react";
import { Button } from "../../../component/Button/Button";
import { QuantityInput } from "../../../component/QuantityInput/QuantityInput";
import { getImagePath } from "../../../utils/getImagePath";
import { useShoppingNavigation } from "../../../hooks/useShoppingNavigation";
import { SaleLabel } from "../SaleLabel/SaleLabel";

import classes from './FullItem.module.css'
import { cn } from "../../../utils/cn";
import { checkProductDate } from "../../../utils/checkProductDate";
import { NewProductLabel } from "../NewProductLabel/NewProductLabel";
import { useWishlist } from "../../../hooks/useWishlist";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export function FullItem(props: ItemProps) {
    const { title, img, desc, price, stock: propStock, id, category, isOnSale, createdAt } = props;
    const [mainImg, setMainImg] = useState<string>(img[0]);
    const [currentStock, setStock] = useState<number>(propStock);
    const [quantityValue, setQuantity] = useState(1);
    const { addToOrder, items } = useShopContext();
    const { navigateToCategory } = useShoppingNavigation();
    const { liked, toggleLike } = useWishlist(id);

    useEffect(() => {
        setMainImg(img[0])
    }, [img]); -

        useEffect(() => {
            const itemInContext = items.find(i => i.id === id);
            if (itemInContext) {
                setStock(itemInContext.stock);
            } else {
                setStock(propStock);
            }
        }, [items, id, propStock]);

    useEffect(() => {
        if (currentStock === 0) setQuantity(0);
        else setQuantity(prev => Math.min(prev || 1, currentStock));
    }, [currentStock]);


    return (
        <div className={classes.fullItem}>

            <div className={classes.container}>
                <div className={classes.labels}>
                    {isOnSale &&
                        <SaleLabel />
                    }
                    {checkProductDate(createdAt) &&
                        <NewProductLabel />
                    }
                </div>
                <img
                    src={getImagePath(mainImg)}
                    alt={title}
                    className={classes.mainImg}
                />
                <div className={classes.imgContainer}>
                    {Array.isArray(img) && img.map((src, i) => (
                        <img
                            key={i}
                            src={getImagePath(src)}
                            alt={`${title} ${i}`}
                            className={classes.img}
                            onClick={() => setMainImg(src)}
                        />
                    ))
                    }
                </div>
            </div>
            <div className={classes.container}>
                <h2 className={classes.title}>{title}
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
                <p className={cn(classes.price, isOnSale && classes.salePrice)}>${Number(price).toFixed(2)}</p>
                <div className={classes.quantityContainer}>
                    <QuantityInput
                        quantity={quantityValue}
                        stock={propStock}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <Button
                        disabled={currentStock === 0 || quantityValue > currentStock}
                        bgColor="black"
                        textColor="white"
                        text="ADD TO ORDER"
                        onClick={() => {
                            addToOrder({ ...props, quantity: quantityValue });
                        }}
                    />
                </div>
                <p className={classes.desc}>{desc}</p>
            </div>
            <div
                className={classes.closeBth}
                onClick={() => navigateToCategory(category)}
            >
                ✕
            </div>
        </div>
    )
}