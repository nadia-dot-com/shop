import { useUserContext } from "../../../context/UserContext";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { LoginButton } from "../../LoginButton/LoginButton";
import { API_URL } from "../../../api/config";

import classes from './LoginModal.module.css';

export function LoginModal() {
    const { toggleModalOpen } = useUserContext();
    const refCallback = useClickOutside(toggleModalOpen);

    const handleLogin = () => {
        window.location.href = `${API_URL}/auth/google`;
    }

    return (
        <div ref={refCallback} className={classes.loginModal}>
            <h2>LogIn/SingIn</h2>
            <LoginButton login={handleLogin} text="Continue with Google"/>
        </div>
    )
}