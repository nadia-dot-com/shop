import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";
import { ToastContainer } from "react-toastify";

import classes from './MainLayout.module.css';

export function MainLayout() {

    return (
        <Wrapper>
            < Header />
            <main>
                <Outlet />
            </main>

            <Footer />

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