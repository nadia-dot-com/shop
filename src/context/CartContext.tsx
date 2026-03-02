import { createContext, ReactNode, useEffect, useReducer } from "react";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ORDER_KEY, IS_ORDER_OPEN_KEY } from "../data/locatStorageKey";
import { toast } from "react-toastify";
import { Product } from "../types/api/product";
import { OrderItem } from "../types/orderTypes";
import { CartContextValue } from "../types/cartTypes";
import { cartReducer } from "../store/reducers/cart";
import {
  addToCartAction,
  clearCartAction,
  removeFromCartAction,
  updateQuantityAction,
} from "../store/actions/cart";

export const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [storedCart, setStoredCart] = useLocalStorage<OrderItem[]>(
    ORDER_KEY,
    [],
  );
  const [isCartOpen, setIsCartOpen] = useLocalStorage<boolean>(
    IS_ORDER_OPEN_KEY,
    false,
  );

  const [cartItems, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    setStoredCart(cartItems);
  }, [cartItems, setStoredCart]);

  useEffect(() => {
    document.body.style.overflow = isCartOpen ? "hidden" : "";
  }, [isCartOpen]);

  const addToCart = (product: Product, quantity: number = 1) => {
    dispatch(addToCartAction(product, quantity));
    toast.success(`${product.name} added to Shopping Cart!`);
  };

  const removeFromCart = (id: string) => dispatch(removeFromCartAction(id));

  const updateQuantity = (id: string, quantity: number, stock?: number) =>
    dispatch(updateQuantityAction(id, quantity, stock));

  const clearCart = () => dispatch(clearCartAction());

  const toggleCartOpen = () => setIsCartOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        updateQuantity,
        addToCart,
        removeFromCart,
        clearCart,

        isCartOpen,
        toggleCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = createContextHook(CartContext, CartProvider);
