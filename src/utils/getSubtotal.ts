import { ItemProps } from "../types/shopTypes";

export const getSubtotal = (arr: ItemProps[]) => {
    return arr.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
};