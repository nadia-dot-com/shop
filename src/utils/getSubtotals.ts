import { OrderItem } from "../types/orderTypes";
import { getDiscountPrice } from "./product";
import { roundMoney } from "./roundMoney";

export const getSubtotal = (arr: OrderItem[]) => {
    return arr.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
};

export const getDiscountSubtotal = (arr: OrderItem[]) => {
    return roundMoney(arr.reduce((sum, item) => sum + getDiscountPrice(item.price, item.discount) * item.quantity, 0));
};
