import { Button } from "../component/Button/Button";
import { useUserContext } from "../context/UserContext"
import { useClickOutside } from "../hooks/useClickOutside";

import classes from './LoginModal.module.css'
import { FcGoogle } from "react-icons/fc";

export function LoginModal() {
    const { toggleModalOpen } = useUserContext();
    const refCallback = useClickOutside(toggleModalOpen);

    return (
        <div ref={refCallback} className={classes.loginModal}>
            <h1>LogIn/SingIn</h1>
            <Button
                bgColor="black"
                textColor="white"
                text=" Continue with Google"
            >
               <FcGoogle className={classes.googleIcon}/>
            </Button>
        </div>
    )
}