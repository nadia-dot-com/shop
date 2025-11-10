import { useShopContext } from "../../context/ShopContext";
import { useUserContext } from "../../context/UserContext";
import { LoginModal } from "../../pages/UserAccount/LoginModal/LoginModal";
import { OrderModal } from "../../pages/OrderModal/OrderModal";
import { Menu } from "../Menu/Menu";
import { StyledLink } from "../StyledLink/StyledLink";

import classes from './Header.module.css';
import { ROUTES } from "../../config/Routes";

export default function Header() {
    const { isOrderOpen } = useShopContext();
    const { isLoginModalOpen } = useUserContext();
    return (
        <header className={classes.header}>
            <StyledLink to={`${ROUTES.home}${ROUTES.mainLayout}`} className={classes.logo}>House Staff</StyledLink>
            <Menu />
            {isLoginModalOpen && <LoginModal />}
            {isOrderOpen && <OrderModal />}
        </header>
    )
}