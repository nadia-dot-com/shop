import { LoginButton } from "../../../components/LoginButton/LoginButton";

import classes from './MakeLogin.module.css';

export function MakeLogin() {

    const handleLogin = () => {
        window.location.href = "http://localhost:3000/auth/google";
    }

    return (
        <div className={classes.makeLogin}>
            <div>Hi there! Sign in / Log in to continue.</div>
            <LoginButton login={handleLogin} text="Continue with Google"/>
        </div>
    )
}