import { Outlet } from "react-router-dom";
import { NavAccount } from "./NavAccount/NavAccount";
import { useUserContext } from "../../context/UserContext";
import { MakeLogin } from "./MakeLogin/MakeLogin";
import { DataLoader } from "../../components/DataLoader/DataLoader";

import classes from "./UserAccount.module.css";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../../components/ErrorFallback/ErrorFallback";

export default function UserAccount() {
  const { user, isLoading, error } = useUserContext();

  return (
    <DataLoader loading={isLoading} loaded={!isLoading} error={error}>
      <div className={classes.userWrapper}>
        {user ? (
          <>
            <h1 className={classes.helloUser}>Hello, {user.name} ;)</h1>

            <NavAccount />

            <section className={classes.content}>
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Outlet />
              </ErrorBoundary>
            </section>
          </>
        ) : (
          <MakeLogin />
        )}
      </div>
    </DataLoader>
  );
}
