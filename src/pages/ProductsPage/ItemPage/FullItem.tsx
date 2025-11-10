import {useShopContext} from "../../../context/ShopContext";
import {ItemProps} from "../../../types/shopTypes";

import classes from './FullItem.module.css'
import {StyledLink} from "../../../component/StyledLink/StyledLink";
import {useEffect, useState} from "react";
import {Button} from "../../../component/Button/Button";
import {QuantityInput} from "../../../component/QuantityInput/QuantityInput";
import {getImagePath} from "../../../utils/getImagePath";

export function FullItem(props: ItemProps) {
    const {title, img, desc, price, stock: propStock, id} = props;
    const [mainImg, setMainImg] = useState<string>(img[0]);
    const [currentStock, setStock] = useState<number>(propStock);
    const [quantityValue, setQuantity] = useState(1);
    const {addToOrder, items} = useShopContext();

    useEffect(() => {
        setMainImg(img[0])
    }, [img]);

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
            <div className={classes.imgContainer}>
                <img
                    src={getImagePath(mainImg)}
                    alt={title}
                    className={classes.mainImg}
                />
                <div className={classes.smallContainer}>
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
                <h2 className={classes.title}>{title}</h2>
                <p className={classes.price}>{Number(price).toFixed(2)} PLN</p>
                <div className={classes.quantityContainer}>
                    <QuantityInput
                        quantity={quantityValue}
                        stock={propStock}
                        className={classes.quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <Button
                        disabled={currentStock === 0 || quantityValue > currentStock}
                        bgColor="black"
                        textColor="white"
                        text="ADD TO ORDER"
                        onClick={() => {
                            addToOrder({...props, quantity: quantityValue});
                            // setStock(p => (p - quantityValue))
                        }}
                    />
                </div>
                <p className={classes.desc}>{desc}</p>
            </div>
            <div className={classes.closeBth}>
                <StyledLink to="..">✕</StyledLink>
            </div>
        </div>
    )
}