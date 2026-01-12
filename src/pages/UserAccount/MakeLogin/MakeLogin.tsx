import { LoginButton } from "../../../components/LoginButton/LoginButton";

import classes from './MakeLogin.module.css';

export function MakeLogin() {

    return (
        <div className={classes.makeLogin}>
            <div>Hi there! Sign in / Log in to continue.</div>
            <LoginButton text="Continue with Google"/>
        </div>
    )
}