import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/Routes";
import { toast } from "react-toastify";
import { GUEST_WISHLIST_KEY } from "../../data/locatStorageKey";
import { useAddToWishlist } from "../../hooks/wishlist/useAddToWishlist";
import { useUserContext } from "../../context/UserContext";
import { useWishlistContext } from "../../context/WishlistContext";

import classes from './GoogleCallback.module.css';

export function GoogleCallback() {
    const navigate = useNavigate();
    const merge = useAddToWishlist();
    const { cleanGuestWishlist } = useWishlistContext();
    const {updateToken} = useUserContext();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
            toast.error("Login failed");
            navigate('/', { replace: true });
            return;
        }

        localStorage.setItem("token", token);
        updateToken(token);
        
        const localWishlist: string[] = JSON.parse(
            localStorage.getItem(GUEST_WISHLIST_KEY) ?? "[]"
        );
        
        if(localWishlist.length > 0) {
            merge.mutate(localWishlist);
        }
        
        cleanGuestWishlist();
        navigate(ROUTES.userAccount, { replace: true })
    }, []);

    return <div className={classes.signing}>Signing you in...</div>
}