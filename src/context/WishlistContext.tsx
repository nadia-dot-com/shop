import { createContext, ReactNode } from "react";
import { createContextHook } from "../hooks/createContextHook";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GUEST_WISHLIST_KEY } from "../data/locatStorageKey";
import { WishlistValue } from "../types/wishlistTypes";

export const WishlistContext = createContext<WishlistValue | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [guestWishlist, setGuestWishlist] = useLocalStorage<string[]>(GUEST_WISHLIST_KEY, []);

    const toggleGuestWishlist = (productId: string) => {
        setGuestWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        )
    }

    const cleanGuestWishlist = () => setGuestWishlist([])

    return <WishlistContext.Provider
        value={{
            guestWishlist,
            toggleGuestWishlist,
            cleanGuestWishlist
        }}
    >
        {children}
    </ WishlistContext.Provider>
}

export const useWishlistContext = createContextHook(WishlistContext, WishlistProvider);
