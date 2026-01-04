import { FcGoogle } from "react-icons/fc";
import { Button } from "../Button/Button";

import classes from './LoginButton.module.css';

export function LoginButton({login, text}: {login: ()=> void, text: string}) {

    return (
         <Button
                bgColor="black"
                textColor="white"
                text={text}
                onClick={login}
            >
                <FcGoogle className={classes.googleIcon} />
            </Button>
    )
}