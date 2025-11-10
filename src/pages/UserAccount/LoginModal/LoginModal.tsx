import { Button } from "../../../component/Button/Button";
import { useUserContext } from "../../../context/UserContext";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { FcGoogle } from "react-icons/fc";

import classes from './LoginModal.module.css'
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../config/Routes"; 
export function LoginModal() {
    const { toggleModalOpen, setUser } = useUserContext();
    const refCallback = useClickOutside(toggleModalOpen);

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

                if(res.data.email_verified) {
                    setUser(res.data);
                    toggleModalOpen();
                    navigate(ROUTES.userAccount)
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
        <div ref={refCallback} className={classes.loginModal}>
            <h1>LogIn/SingIn</h1>
            <Button
                bgColor="black"
                textColor="white"
                text=" Continue with Google"
                onClick={() => login()}
            >
                <FcGoogle className={classes.googleIcon} />
            </Button>
        </div>
    )
}