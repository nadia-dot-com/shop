import { OrderItem } from '../../../../../../../types/orderItem'
import { getSubtotal } from '../../../../../../../utils/getSubtotal'
import { getDiscountPrice } from '../../../../../../../utils/product'

import classes from './OrderList.module.css'

export function OrderList({ order }: { order: OrderItem[] }) {

    return (
        <section className={classes.orderListSection}>

            <div className={classes.title}>
                <div>Product</div>
                <div>Total</div>
            </div>

            <ul className={classes.orderList}>
                {order.map((product) => (
                    <li
                        className={classes.orderItem}
                        key={product.id}>
                        <p>
                            {product.name} x {product.quantity}
                        </p>
                        <p className={classes.price}>
                            {product.discount ?
                                <p className={classes.discountPrice}>${getDiscountPrice(product.price, product.discount).toFixed(2)}</p>
                                : <p>${Number(product.price * product.quantity).toFixed(2)}</p>
                            }
                        </p>
                    </li>
                ))
                }
            </ul>
        </section>
    )
}