import { useShopContext } from "../../context/ShopContext";
import { OrderModal } from "../../OrderModal/OrderModal";
import { Menu } from "../Menu/Menu";
import { StyledLink } from "../StyledLink/StyledLink";

import classes from './Header.module.css';

export default function Header() {
    const { isOrderOpen } = useShopContext();

    return (
        <header className={classes.header}>
                <StyledLink to={'/house-staff'} className={classes.logo}>House Staff</StyledLink>
                <Menu />
                {isOrderOpen && <OrderModal />}
        </header>
    )
}