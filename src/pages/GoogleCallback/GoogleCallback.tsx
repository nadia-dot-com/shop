import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import classes from './GoogleCallback.module.css';
import { useUserContext } from "../../context/UserContext";
import { ROUTES } from "../../config/Routes";

export function GoogleCallback() {
    const navigate = useNavigate();
    const { updateUser } = useUserContext();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const token = params.get("token");

        if (!token) {
            navigate('/');
            console.log("❌ Login failed");
            return;
        }

        localStorage.setItem("token", token);

        fetch("http://localhost:3000/auth/user", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => {
            if(!res.ok) throw new Error("Auth failed");
            return res.json();
        })
        .then(user => {
            updateUser(user);
            console.log(user)
            navigate( ROUTES.userAccount);
        })
        .catch(()=> {
            localStorage.removeItem("token");
            navigate("/", { replace: true })
        })
    }, []);

    return <div className={classes.signing}>Signing you in...</div>
}