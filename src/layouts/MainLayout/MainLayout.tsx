import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Wrapper } from "../../components/Wrapper/Wrapper";
import { ToastContainer } from "react-toastify";
import { useShopContext } from "../../context/ShopContext";
import { useUserContext } from "../../context/UserContext";
import { LoginModal } from "../../components/modals/LoginModal/LoginModal";
import { OrderModal } from "../../components/modals/OrderModal/OrderModal";

import classes from './MainLayout.module.css';

export function MainLayout() {
    const { isOrderOpen } = useShopContext();
    const { isLoginModalOpen } = useUserContext();

    return (
        <>
            < Header />
            <Wrapper>

                <main>
                    <Outlet />
                </main>

                <Footer />
            </Wrapper>

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
        </>
    )
}