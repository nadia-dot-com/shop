import { StyledLink } from "../StyledLink/StyledLink";
import classes from './Menu.module.css'
import { ShopingCardIcon } from "./ShopingCardIcon/ShopingCartIcon";
// import { NavLink } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";
import { ROUTES } from "../../config/Routes";
import { AccountIcon } from "./AccountIcon/AccountIcon";
import { useUserContext } from "../../context/UserContext";

export function Menu() {
    const { isOrderOpen } = useShopContext();
    const {isLoginModalOpen} = useUserContext();

    return (
        <nav>
            <ul className={classes.nav} >
                <li><StyledLink to={`${ROUTES.home}${ROUTES.mainLayout}`}>Główna Strona</StyledLink></li>
                <li><StyledLink to={ROUTES.contact}>Kontakt</StyledLink></li>
                <li><StyledLink to={ROUTES.products}>Producty</StyledLink></li>
                <li>
                    <AccountIcon active={isLoginModalOpen}/>
                </li>
                <li>
                    <ShopingCardIcon active={isOrderOpen} />
                </li>
            </ul>
        </nav>
    )
}