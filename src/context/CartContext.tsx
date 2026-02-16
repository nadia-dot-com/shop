import { createContext, ReactNode, useEffect } from "react";
import type { CartContextValue } from "../types/shopTypes";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ORDER_KEY, IS_ORDER_OPEN_KEY } from "../data/locatStorageKey";
import { toast } from "react-toastify";
import { Product } from "../types/api/product";
import { OrderItem } from "../types/orderTypes";

export const CartContext = createContext<CartContextValue | null>(null);

const MAX_ITEMS = 100;

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useLocalStorage<OrderItem[]>(ORDER_KEY, []);
  const [isCartOpen, setIsCartOpen] = useLocalStorage<boolean>(
    IS_ORDER_OPEN_KEY,
    false,
  );

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isCartOpen]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const totalItems = prev.reduce((sum, i) => sum + i.quantity, 0);

      if (totalItems + quantity > MAX_ITEMS) {
        toast.error("Cart limit reached (100 items)");
        return prev;
      }

      const existing = prev.find((i) => i.id === product.id);

      if (existing) {
        if (existing.quantity >= product.stockQuantity) {
          return prev;
        }

        return prev.map((i) =>
          i.id === product.id
            ? {
                ...i,
                quantity: Math.min(
                  i.quantity + quantity,
                  product.stockQuantity,
                ),
              }
            : i,
        );
      }

      toast.success(`${product.name} added to Shopping Cart!`);

      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          discount: product.discount,
          img: product.imagesUrls[0],
          categoryName: product.categoryName,
          quantity: Math.min(quantity, product.stockQuantity),
        },
      ];
    });
  };

  const removeFromCart = (item: OrderItem) =>
    setCartItems((prev) => prev.filter((i) => i.id != item.id));

  const updateQuantity = (id: string, quantity: number, stock?: number) => {
    const safeQuantity = stock != null ? Math.min(quantity, stock): quantity
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: safeQuantity } : i)),
    );
  };

  const clearCart = () => setCartItems([]);

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
