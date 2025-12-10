import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/UserContext";
import { ROUTES } from "../../../config/Routes";
import { LoginButton } from "../../../component/LoginButton/LoginButton";

import classes from './MakeLogin.module.css';

export function MakeLogin() {
    const { updateUser } = useUserContext();

    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
            try {
                const res = await axios.get(
                    "https://www.googleapis.com/oauth2/v3/userinfo",
                    {
                        headers: {
                            Authorization: `Bearer ${tokenResponse.access_token}`
                        },
                    }
                );

                if (res.data.email_verified) {
                    updateUser(res.data);
                    navigate(`/${ROUTES.userAccount}`)
                }
            } catch (error) {
                console.log("Error fetching user info", error);
            }
        },
        onError: () => {
            console.log("❌ Login failed");
        },
    })

    return (
        <div className={classes.makeLogin}>
            <div>Hi there! Sign in / Log in to continue.</div>
            <LoginButton login={login} />
        </div>
    )
}