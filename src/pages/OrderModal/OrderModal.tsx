import { EmptyCard } from './EmptyCard/EmptyCard';
import { useShopContext } from '../../context/ShopContext';
import { useClickOutside } from '../../hooks/useClickOutside';
import { ShowOrder } from './ShowOrder/ShowOrder';

import classes from './OrderModal.module.css'

export function OrderModal() {
    const { order, toggleOrderModal } = useShopContext();
    const refCallback = useClickOutside(toggleOrderModal);

    return (
        <div
            ref={refCallback}
            className={classes.orderModal}
        >
            {order.length > 0
                ? <ShowOrder arr={order} />
                : <EmptyCard />
            }
        </div>


    )
}