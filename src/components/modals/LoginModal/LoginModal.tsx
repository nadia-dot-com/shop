import { useUserContext } from "../../../context/UserContext";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { LoginButton } from "../../LoginButton/LoginButton";

import classes from './LoginModal.module.css';

export function LoginModal() {
    const { toggleModalOpen } = useUserContext();
    const refCallback = useClickOutside(toggleModalOpen);

    return (
        <div ref={refCallback} className={classes.loginModal}>
            <h2>LogIn/SingIn</h2>
            <LoginButton text="Continue with Google"/>
        </div>
    )
}