import { useShopContext } from "../../context/ShopContext";
import { useUserContext } from "../../context/UserContext";
import { LoginModal } from "../../UserAccount/LoginModal/LoginModal";
import { OrderModal } from "../../OrderModal/OrderModal";
import { Menu } from "../Menu/Menu";
import { StyledLink } from "../StyledLink/StyledLink";

import classes from './Header.module.css';

export default function Header() {
    const { isOrderOpen } = useShopContext();
    const { isLoginModalOpen } = useUserContext();
    return (
        <header className={classes.header}>
            <StyledLink to={'/house-staff'} className={classes.logo}>House Staff</StyledLink>
            <Menu />
            {isLoginModalOpen && <LoginModal />}
            {isOrderOpen && <OrderModal />}
        </header>
    )
}