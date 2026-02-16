import { useMemo } from "react";
import { useOrders } from "./useOrders";

export const useOrderFromOrders = (orderId?: string) => {
  const { data, ...rest } = useOrders();

  const order = useMemo(
    () => data?.find((o) => o.id === orderId),
    [data, orderId],
  );

  return { order, ...rest };
};
