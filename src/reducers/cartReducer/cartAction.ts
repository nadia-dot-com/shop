import { Product } from "../../types/api/product";

export type CartAction =
  | {
      type: "ADD_TO_CART";
      payload: { product: Product; quantity: number };
    }
  | { type: "REMOVE_FROM_CART"; payload: {id: string} }
  | {
      type: "UPDATE_QUANTITY";
      payload: { id: string; quantity: number; stock?: number };
    }
  | { type: "CLEAR_CART" };
