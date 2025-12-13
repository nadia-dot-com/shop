import { Outlet } from "react-router-dom";
import { NavAccount } from "./NavAccount/NavAccount";
import { useUserContext } from "../../context/UserContext";

import classes from './UserAccount.module.css';
import { MakeLogin } from "./LoginPage/MakeLogin";

export function UserAccount() {
    const { user } = useUserContext();

    if (!user) return <MakeLogin/>;
    const { name } = user;

    return (
        <div className={classes.userWrapper}>
            <div className={classes.helloUser}>
                Hello, {name} ;)
            </div>
                       
                <NavAccount />
          
            <div className={classes.content}>
                <Outlet />
            </div>
        </div>
    )
}