// import { cn } from '../../utils/cn';
import classes from './OrderItem.module.css'
import type { ItemProps } from '../../types/shopTypes';
import { useShopContext } from '../../context/ShopContext';
import { FaTrash } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTES } from '../../config/Routes';
import { QuantityInput } from '../QuantityInput/QuantityInput';

export function OrderItem(props: ItemProps) {
    const { id, title, img, price, stock, quantity } = props;
    const { removeFromOrder, updateQuantity } = useShopContext();
    const { category } = useParams();

    const navigate = useNavigate();
    const path = title.toLowerCase().replace(/ /g, "-");



    return (
        <div className={classes.orderItem}>
            <div>
                <h2
                    className={classes.text}
                    onClick={() => navigate(`${ROUTES.products}/${category}/${path}`)}
                >
                    {title}
                </h2>
                <img
                    src={img[0]}
                    alt={title}
                    className={classes.img}
                    onClick={() => navigate(`${ROUTES.products}/${category}/${path}`)}
                />
            </div>
            
                <QuantityInput
                    quantity={quantity}
                    stock={stock}
                    className={classes.quantity}
                    onChange={(e) => updateQuantity(
                        id,
                        Number(e.target.value)
                    )}
                />
                <p className={classes.price}>
                    Price:
                    <br />
                    {Number(price).toFixed(2)} $</p>
            
            <p className={classes.price}>
                Subtotal:
                <br />
                {(Number(price) * quantity).toFixed(2)} $</p>
            <FaTrash className={classes.removeFromCard} onClick={() => removeFromOrder({ ...props })}>-</FaTrash>
        </div>
    )
}