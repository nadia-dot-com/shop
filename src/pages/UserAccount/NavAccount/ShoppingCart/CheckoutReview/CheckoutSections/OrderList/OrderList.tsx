import { ItemProps } from '../../../../../../../types/shopTypes'
import classes from './OrderList.module.css'

export function OrderList({order}: {order: ItemProps[]}) {

    return (
        <div className={classes.wrapper}>

            <div className={classes.title}>
            <div>Product</div>
            <div>Total</div>
            </div>
            
            <ul className={classes.orderList}>
                {order.map((product) => (
                    <li 
                    className={classes.orderItem}
                    key={product.id}>
                        <p className={classes.price}>
                            {product.title} x {product.quantity}
                        </p>
                        <p>{(Number(product.price) * product.quantity).toFixed(2)} $</p>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}