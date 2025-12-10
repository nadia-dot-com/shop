import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../component/Button/Button';
import { useUserContext } from '../../../../context/UserContext';
import classes from './MyOrders.module.css'

export function MyOrders() {
    const { orders } = useUserContext();

     const navigate = useNavigate();
     
     const handleClick = (id: string) => {
        const path = `${id}`;
        navigate(path);
    }

    return (
        <table className={classes.ordersTable}>
            <thead>
                <tr>
                    <th>Order</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.orderId}>
                        <td className={classes.orderId}>{order.orderId}</td>
                        <td>
                            {new Date(order.createdAt).toLocaleDateString("en-US", {
                                year: 'numeric',
                                month: "long",
                                day: "numeric"
                            })}
                        </td>
                        <td>{order.status}</td>
                        <td className={classes.total}>${order.total}</td>
                        <td>
                            <Button
                                bgColor='#ddd'
                                textColor='black'
                                text='VIEW'
                                onClick={()=> handleClick(order.orderId)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}