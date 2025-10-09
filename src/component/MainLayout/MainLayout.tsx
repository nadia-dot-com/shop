import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";
import { useShopContext } from "../../context/ShopContext";
import { OrderModal } from "../../OrderModal/OrderModal";
import { Categories } from "../Categories/Categories";

export function MainLayout() {
    const { isOrderOpen } = useShopContext();

    return (
        <Wrapper>
            < Header />
            <Categories />
            <main>
                <Outlet />
            </main>

            {isOrderOpen && <OrderModal />}

            <Footer />
        </Wrapper>
    )
}