import { cn } from '../../utils/cn';
import classes from './Item.module.css'
import type { ItemProps } from '../../types/shopTypes';
import { useShopContext } from '../../context/ShopContext';
import { useNavigate, useParams } from 'react-router-dom';

export function Item(props: ItemProps) {
    const { title, img, shortDesc, price, stock } = props;
    const { addToOrder } = useShopContext();
    const { category } = useParams();

    const navigate = useNavigate();
    const path = title.toLowerCase().replace(/ /g, "-");

    return (
        <div className={cn(classes.item, stock === 0 && classes.disableItem)}>
            <img src={img[0]} alt={title} className={classes.img} onClick={() => navigate(`${category}/${path}`)} />
            <h2
                className={classes.title}
                onClick={() =>
                    navigate(`${category}/${path}`)}
            >
                {title}
                <span style={{ fontWeight: '300' }}>
                    {props.collection && `| ${props.collection}`}</span>
            </h2>
            <p className={classes.shortDesc}>{shortDesc}</p>
            <p className={classes.price}>{Number(price).toFixed(2)} PLN</p>
            <button
                className={cn(classes.addToCard)}
                onClick={() => addToOrder(props)}
                disabled={stock === 0}
            >
                +
            </button>
        </div>
    )
}