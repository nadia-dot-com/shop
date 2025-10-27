import { EmptyCard } from '../component/EmptyCard/EmptyCard';
import { useShopContext } from '../context/ShopContext'
import { ShowOrder } from '../ShowOrder/ShowOrder';
import classes from './OrderModal.module.css'

export function OrderModal() {
    const { order } = useShopContext();
    return (
        <div className={classes.orderModal}>
            {order.length > 0
                ? <ShowOrder arr={order}/>
                : <EmptyCard/>    
        }
        </div>
    )
}