import { Outlet } from "react-router-dom";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { Wrapper } from "../../Wrapper/Wrapper";
import { ToastContainer } from "react-toastify";
import { useCartContext } from "../../../context/CartContext";
import { useUserContext } from "../../../context/UserContext";
import { LoginModal } from "../../modals/LoginModal/LoginModal";
import { OrderModal } from "../../modals/OrderModal/OrderModal";

import classes from "./MainLayout.module.css";

export function MainLayout() {
  const { isCartOpen } = useCartContext();
  const { isLoginModalOpen } = useUserContext();

  return (
    <div className={classes.layout}>
      <Header />
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>

      <Footer />

      {isLoginModalOpen && <LoginModal />}
      {isCartOpen && <OrderModal />}

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
    </div>
  );
}
