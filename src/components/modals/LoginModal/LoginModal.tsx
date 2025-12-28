import { useUserContext } from "../../../context/UserContext";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { LoginButton } from "../../LoginButton/LoginButton";
import { useShopContext } from "../../../context/ShopContext";

import classes from './LoginModal.module.css';

export function LoginModal() {
    const { toggleModalOpen, updateUser, mergeUserWishlist } = useUserContext();
    const refCallback = useClickOutside(toggleModalOpen);
    // const { guestWishlist, cleanGuestWishlist } = useShopContext();

    const handleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google";
    }

    return (
        <div ref={refCallback} className={classes.loginModal}>
            <h2>LogIn/SingIn</h2>
            <LoginButton login={handleLogin} />
        </div>
    )
}