import { FcGoogle } from "react-icons/fc";
import { Button } from "../Button/Button";

import classes from './LoginButton.module.css';

export function LoginButton({login}: {login: ()=> void}) {

    return (
         <Button
                bgColor="black"
                textColor="white"
                text=" Continue with Google"
                onClick={login}
            >
                <FcGoogle className={classes.googleIcon} />
            </Button>
    )
}