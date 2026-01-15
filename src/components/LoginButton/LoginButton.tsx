import { FcGoogle } from "react-icons/fc";
import { Button } from "../Button/Button";
import { API_URL } from "../../api/config";

import classes from './LoginButton.module.css';

export function LoginButton({ text }: { text: string }) {

    const handleLogin = () => {
        window.location.href = `${API_URL}/auth/google`;
    }

    return (
        <Button
            bgColor="black"
            textColor="white"
            text={text}
            onClick={handleLogin}
        >
                <FcGoogle className={classes.googleIcon} />
        </Button>
    )
}