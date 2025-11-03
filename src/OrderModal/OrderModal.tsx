import { EmptyCard } from '../component/EmptyCard/EmptyCard';
import { useShopContext } from '../context/ShopContext'
import { useClickOutside } from '../hooks/useClickOutside';
import { ShowOrder } from '../ShowOrder/ShowOrder';

import classes from './OrderModal.module.css'

export function OrderModal() {
    const { order, toggleOrder } = useShopContext();
    const refCallback = useClickOutside(toggleOrder);
    
    return (
        <div ref={refCallback} className={classes.orderModal}>
            {order.length > 0
                ? <ShowOrder arr={order} />
                : <EmptyCard />
            }
        </div>
    )
}