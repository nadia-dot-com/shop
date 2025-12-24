import { OrderItem } from "../types/orderItem";
import { getDiscountPrice } from "./product";

export const getSubtotal = (arr: OrderItem[]) => {
    return arr.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
};

export const getDiscountSubtotal = (arr: OrderItem[]) => {
    return arr.reduce((sum, item) => sum + getDiscountPrice(item.price, item.discount) * item.quantity, 0);
};
