import classes from './OrderItemRow.module.css'
import { useShopContext } from '../../context/ShopContext';
import { FaTrash } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../config/Routes';
import { QuantityInput } from '../QuantityInput/QuantityInput';
import { OrderItem } from '../../types/orderItem';
import { getDiscountPrice } from '../../utils/product';
import { cn } from '../../utils/cn';

export function OrderItemRow({ product }: { product: OrderItem }) {
    const { id, name, img, price, stockQuantity, quantity, categoryName, discount } = product;
    const { removeFromOrder, updateQuantity } = useShopContext();
    console.log('ORDER ITEM', product);

    const navigate = useNavigate();

    const category = categoryName.toLowerCase() ?? '';
    const path = name.toLowerCase().replace(/ /g, "-");


    return (
        <div className={classes.orderItem}>
            <div className={classes.itemInfo}>
                <div
                    className={classes.text}
                    onClick={() => navigate(`${ROUTES.products}/${category}/${path}`)}
                >
                    {name}
                </div>
                <img
                    src={img}
                    alt={name}
                    className={classes.img}
                    onClick={() => navigate(`${ROUTES.products}/${category}/${path}`)}
                />
            </div>

            <QuantityInput
                quantity={quantity}
                stock={stockQuantity}
                onChange={(e) => updateQuantity(
                    id,
                    Number(e.target.value)
                )}
            />

            <p className={cn(classes.price, discount > 0 && classes.discountPrice)}>
                Price:
                <br />
                {discount > 0 ?
                    <p>${getDiscountPrice(price, discount)}</p>
                    : <p>${Number(price).toFixed(2)}</p>
                }
            </p>

            <p className={cn(classes.price, discount > 0 && classes.discountPrice)}>
                Subtotal:
                <br />
                {discount > 0 ?
                    <p >${getDiscountPrice(price, discount)}</p>
                    : <p>${(Number(price) * quantity).toFixed(2)}</p>
                }
            </p>
            <FaTrash className={classes.removeFromCard} onClick={() => removeFromOrder({ ...product })}>-</FaTrash>
        </div>
    )
}