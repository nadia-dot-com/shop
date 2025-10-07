import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header/Header";
import { Wrapper } from "../Wrapper/Wrapper";

export function MainLayout() {

    return (
        <Wrapper>
            < Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Wrapper>
    )
}