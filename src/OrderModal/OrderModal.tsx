import { OrderItem } from '../component/OrderItem/OrderItem';
import { useShopContext } from '../context/ShopContext'
import classes from './OrderModal.module.css'

export function OrderModal() {
    const { order } = useShopContext();
    return (
        <div className={classes.shopCard}>
            {order.map(el => (
                <OrderItem key={el.id} {...el} />
            ))}
        </div>
    )
}