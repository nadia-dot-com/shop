import { Outlet } from "react-router-dom";
import { NavAccount } from "./NavAccount/NavAccount";
import { useUserContext } from "../../context/UserContext";
import { MakeLogin } from "./MakeLogin/MakeLogin";
import { DataLoader } from "../../components/DataLoader/DataLoader";

import classes from './UserAccount.module.css';

export function UserAccount() {
    const { user, isLoading, error } = useUserContext();

    return (
        <DataLoader
            loading={isLoading}
            loaded={!isLoading}
            error={error}
        >
            {user ? (
                <div className={classes.userWrapper}>
                    <h1 className={classes.helloUser}>
                        Hello, {user.name} ;)
                    </h1>

                    <NavAccount />

                    <section className={classes.content}>
                        <Outlet />
                    </section>
                </div>
            ) : (
                <MakeLogin />
            )}
        </DataLoader>
    );
}
