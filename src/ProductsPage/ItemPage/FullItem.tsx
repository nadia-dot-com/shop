import { useShopContext } from "../../context/ShopContext";
import { ItemProps } from "../../types/types";

import classes from './FullItem.module.css'
import { StyledLink } from "../../component/StyledLink/StyledLink";
import { useEffect, useState } from "react";
import { Button } from "../../component/Button/Button";
import { QuantityInput } from "../../component/QuantityInput/QuantityInput";

export function FullItem(props: ItemProps) {
    const [quantityValue, setQuantity] = useState(1);
    const { title, img, desc, price, stock } = props;
    const [mainImg, setMainImg] = useState<string>(img[0])
    const { addToOrder } = useShopContext();

    useEffect(() => {
        setMainImg(img[0])
    }, [img])

    return (
        <div className={classes.fullItem}>
            <div className={classes.imgContainer}>
                <img
                    src={mainImg}
                    alt={title}
                    className={classes.mainImg}
                />
                <div className={classes.smallContainer}>
                    {Array.isArray(img) && img.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`${title} ${i}`}
                            className={classes.img}
                            onClick={() => setMainImg(src)}
                        />
                    ))
                    }
                </div>
            </div>
            <div className={classes.container}>
                <h2 className={classes.title}  >{title}</h2>
                <p className={classes.price} >{Number(price).toFixed(2)} PLN</p>
                <div className={classes.quantityContainer}>
                    <QuantityInput
                        quantity={quantityValue}
                        stock={stock}
                        className={classes.quantity}
                        onChange={(e)=>setQuantity(Number(e.target.value))}
                    />
                    <Button
                        disabled={stock === 0}
                        bgColor="black"
                        textColor="white"
                        text="ADD TO ORDER"
                        onClick={() => addToOrder({...props, quantity: quantityValue})}
                    />
                </div>
                <p className={classes.desc} >{desc}</p>
            </div>
            <div className={classes.closeBth}>
                <StyledLink to="..">✕</StyledLink>
            </div>
        </div>
    )
}