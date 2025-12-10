import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";
import { ToastContainer } from "react-toastify";
import { useShopContext } from "../../context/ShopContext";
import { useUserContext } from "../../context/UserContext";
import { LoginModal } from "../../pages/UserAccount/LoginModal/LoginModal";
import { OrderModal } from "../../pages/OrderModal/OrderModal";

import classes from './MainLayout.module.css';

export function MainLayout() {
    const { isOrderOpen } = useShopContext();
    const { isLoginModalOpen } = useUserContext();

    return (
        <Wrapper>
            < Header />

            <main>
                <Outlet />
            </main>

            <Footer />

            {isLoginModalOpen && <LoginModal />}
            {isOrderOpen && <OrderModal />}

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="light"
                className={classes.toastContainer}
            />
        </Wrapper>
    )
}