import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../config/Routes";
import { toast } from "react-toastify";

import classes from './GoogleCallback.module.css';

export function GoogleCallback() {
    const navigate = useNavigate();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
            toast.error("Login failed");
            navigate('/', { replace: true });
            return;
        }

        localStorage.setItem("token", token);
        navigate(ROUTES.userAccount, {replace: true})
    }, []);

    return <div className={classes.signing}>Signing you in...</div>
}