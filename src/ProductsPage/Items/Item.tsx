import { cn } from '../../utils/cn';
import classes from './Item.module.css'
import type { ItemProps } from '../../types/types';
import { useShopContext } from '../../context/ShopContext';
import { useNavigate, useParams } from 'react-router-dom';

export function Item(props: ItemProps) {
    const { title, img, shortDesc, price } = props;
    const { addToOrder } = useShopContext();
    const { category } = useParams();

    const navigate = useNavigate();
    const path = title.toLowerCase().replace(/ /g, "-");

    return (
        <div className={classes.item}>
            <img src={img} alt={title} className={classes.img} onClick={() => navigate(`${category}/${path}`)} />
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
            <div className={cn(classes.addToCard)} onClick={() => addToOrder(props)}>+</div>
        </div>
    )
}