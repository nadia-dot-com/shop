// import { cn } from '../../utils/cn';
import classes from './OrderItem.module.css'
import type { ItemProps } from '../../types/types';
import { useShopContext } from '../../context/ShopContext';
import { FaTrash } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../config/Routes';
import { QuantityInput } from '../QuantityInput/QuantityInput';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { STORAGE_KEY } from '../../data/locatStorageKey';


export function OrderItem(props: ItemProps) {
    const [count, setCont] = useLocalStorage<ItemProps[]>(STORAGE_KEY, [props]);

    const { id, title, img, price, stock, quantity } = props;
    const { removeFromOrder, updateQuantity } = useShopContext();
    const { category } = useParams();

    const navigate = useNavigate();
    const path = title.toLowerCase().replace(/ /g, "-");



    return (
        <div className={classes.orderItem}>
            <img
                src={img[0]}
                alt={title}
                className={classes.img}
                onClick={() => navigate(`${ROUTES.products}/${category}/${path}`)}
            />
             <QuantityInput
                        quantity={quantity}
                        stock={stock}
                        className={classes.quantity}
                        onChange={(e)=>updateQuantity(id, Number(e.target.value))}
                    />
            <div >
                <h2
                    className={classes.text}
                    onClick={() => navigate(`${ROUTES.products}/${category}/${path}`)}
                >
                    {title}
                </h2>
                <p className={classes.price}>{Number(price).toFixed(2)} PLN</p>
            </div>
            <FaTrash className={classes.removeFromCard} onClick={() => removeFromOrder({...props})}>-</FaTrash>
        </div>
    )
}