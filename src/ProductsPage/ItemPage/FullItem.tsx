import { useShopContext } from "../../context/ShopContext";
import { ItemProps } from "../../types/types";

import classes from './FullItem.module.css'
import { StyledLink } from "../../component/StyledLink/StyledLink";

export function FullItem(props: ItemProps) {
    const { title, img, desc, price } = props;
    const { addToOrder } = useShopContext();

    return (
        <div className={classes.fullItem}>
            <img src={img} alt={title} className={classes.img} />
            <div className={classes.container}>
                <h2 className={classes.title}  >{title}</h2>
                <p className={classes.desc} >{desc}</p>
                <p className={classes.price} >{Number(price).toFixed(2)} PLN</p>
                <div className={classes.addToCard} onClick={() => addToOrder(props)}>+</div>
            </div>
            <div className={classes.closeBth}>
                <StyledLink to="..">✕</StyledLink>
            </div>
        </div>
    )
}