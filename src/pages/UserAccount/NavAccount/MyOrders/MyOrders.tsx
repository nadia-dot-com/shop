import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../components/Button/Button';
import { useOrders } from '../../../../hooks/orders/useOrders'; 

import classes from './MyOrders.module.css';
import { LoadingSpinner } from '../../../../components/LoadingSpinner/LoadingSpinner';
import { ErrorState } from '../../../../components/ErrorState/ErrorState';
import { ERROR_MESSAGES } from '../../../../constants/messages';

export function MyOrders() {
    const { data: orders, isLoading, error } = useOrders();
    const navigate = useNavigate();

    if(isLoading) return <LoadingSpinner/>;

    if(error) return <ErrorState message={ERROR_MESSAGES.GENERIC}/>;

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
                {orders?.map(order => (
                    <tr key={order.id}>
                        <td className={classes.orderId}>{order.id}</td>
                        <td>
                            {new Date(order.createdAt).toLocaleDateString("en-US", {
                                year: 'numeric',
                                month: "long",
                                day: "numeric"
                            })}
                        </td>
                        <td>{order.status}</td>
                        <td className={classes.total}>${order.totalPrice}</td>
                        <td>
                            <Button
                                bgColor='#ddd'
                                textColor='black'
                                text='VIEW'
                                onClick={() => handleClick(order.id)}
                            />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}