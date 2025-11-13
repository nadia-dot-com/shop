import { Outlet } from "react-router-dom";
import { NavAccount } from "./NavAccount/NavAccount";
import { useUserContext } from "../../context/UserContext";

import classes from './UserAccount.module.css';

export function UserAccount() {
    const { user } = useUserContext();

    if (!user) return <p>Please log in to access your account.</p>;
    const { name } = user;
    return (
        <div className={classes.mainWrapper}>
            <div className={classes.helloUser}>
                Hello, {name} ;)
            </div>
        <div className={classes.pageWrapper}>
            <aside className={classes.sidebar}>
                <NavAccount />
            </aside>
            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
        </div>

    )
}