import { DeliveryMethod } from "../types/api/options";
import { OrderItem } from "../types/orderTypes";
import { calculateCheckoutPrice } from "../utils/calculateCheckoutPrice";
import { useOptions } from "./options/useOptions";

export function useCheckoutPrice({
  cartItems,
  country,
  delivery,
}: {
  cartItems: OrderItem[];
  country: string | null;
  delivery: DeliveryMethod | null;
}) {
  const { data } = useOptions();

  const vatRate = data?.countries.find((c) => c.name === country)?.vatRate ?? 0;

  const deliveryPrice = delivery?.price ?? 0;

  return calculateCheckoutPrice({
    cartItems,
    deliveryPrice,
    vatRate,
  });
}
