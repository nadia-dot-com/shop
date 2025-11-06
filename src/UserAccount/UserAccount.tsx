import { Outlet } from "react-router-dom";
import { NavAccount } from "./NavAccount/NavAccount";
import { useUserContext } from "../context/UserContext";

import classes from './UserAccount.module.css';

export function UserAccount() {
    const { user } = useUserContext();

    if (!user) return <p>Please log in to access your account.</p>;
    const { name } = user;
    return (
        <div className={classes.userAccount}>
            <div className={classes.helloUser}>
                Hello, {name} ;)
            </div>
            <NavAccount />
            <div>
                <Outlet />
            </div>
        </div>

    )
}