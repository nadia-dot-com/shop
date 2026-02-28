import { createContext, ReactNode, useEffect, useReducer } from "react";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ORDER_KEY, IS_ORDER_OPEN_KEY } from "../data/locatStorageKey";
import { toast } from "react-toastify";
import { Product } from "../types/api/product";
import { OrderItem } from "../types/orderTypes";
import { CartContextValue } from "../types/cartTypes";
import { cartReducer } from "../reducers/cartReducer/cartReducer";
import { CART_MAX_ITEMS } from "../config";

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
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isCartOpen]);

  const addToCart = (product: Product, quantity: number = 1) => {
    const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);

    if (totalItems + quantity > CART_MAX_ITEMS) {
      toast.error("Cart limit reached (100 items)");
      return;
    }

    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
    toast.success(`${product.name} added to Shopping Cart!`);
  };

  const removeFromCart = (id: string) =>
    dispatch({ type: "REMOVE_FROM_CART", payload: { id } });

  const updateQuantity = (id: string, quantity: number, stock?: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity, stock } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

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
