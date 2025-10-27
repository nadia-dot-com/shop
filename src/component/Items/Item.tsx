import { cn } from '../../utils/cn';
import classes from './Item.module.css'
import type { ItemProps } from '../../types/types';
import { useShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export function Item(props: ItemProps) {
    const { title, img, desc, price } = props;
    const { addToOrder } = useShopContext();
    
    const navigate = useNavigate();
    const path = title.toLowerCase().replace(/ /g, "-");

    return (
        <div className={classes.item}>
            <img src={img} alt={title} className={classes.img} onClick={() => navigate(`${path}`)}/>
            <h2 className={classes.title} onClick={() => navigate(`${path}`)} >{title} <span style={{ fontWeight: '300'}}>{props.collection && `| ${props.collection}`}</span> </h2>
            <p className={classes.desc}>{desc}</p>
            <p className={classes.price}>{Number(price).toFixed(2)} PLN</p>
            <div className={cn(classes.addToCard)} onClick={() => addToOrder(props)}>+</div>
        </div>
    )
}