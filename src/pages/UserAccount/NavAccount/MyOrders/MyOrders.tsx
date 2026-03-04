import { useOrders } from "../../../../hooks/orders/useOrders";
import { DataLoader } from "../../../../components/DataLoader/DataLoader";
import { OrderRow } from "./OrderRow/OrderRow";
import classes from "./MyOrders.module.css";

export default function MyOrders() {
  const { data: orders, isLoading, error } = useOrders();

  return (
    <DataLoader loading={isLoading} loaded={!!orders} error={error}>
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
          {(orders || []).map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </DataLoader>
  );
}
