import { cn } from '../../../utils/cn'; 
import classes from './Item.module.css'
import type { ItemProps } from '../../../types/shopTypes'; 
import { useShopContext } from '../../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { SaleLabel } from './SaleLabel/SaleLabel';
import { getImagePath } from '../../../utils/getImagePath';

export function Item(props: ItemProps) {
    const { title, img, shortDesc, price, stock, isOnSale, category } = props;
    const { addToOrder } = useShopContext();

    const navigate = useNavigate();
    const path = title.toLowerCase().replace(/ /g, "-");
    const categoryPath = category.toLowerCase();

    return (
        <div className={cn(classes.item, stock === 0 && classes.disableItem)}>
            {isOnSale &&
                <SaleLabel />
            }
            <img src={getImagePath(img[0])} alt={title} className={classes.img} onClick={() => navigate(`${categoryPath}/${path}`)} />
            <h2
                className={classes.title}
                onClick={() =>
                    navigate(`${categoryPath}/${path}`)}
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