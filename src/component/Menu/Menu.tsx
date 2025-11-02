import { StyledLink } from "../StyledLink/StyledLink";
import classes from './Menu.module.css'
import { ShopingCardIcon } from "./ShopingCardIcon/ShopingCartIcon";
// import { NavLink } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";
import { ROUTES } from "../../config/Routes";
import { AccountIcon } from "./AccountIcon/AccountIcon";

export function Menu() {
    const { isOrderOpen } = useShopContext();
    return (
        <nav>
            <ul className={classes.nav} >
                <li><StyledLink to={ROUTES.home}>Główna Strona</StyledLink></li>
                <li><StyledLink to={ROUTES.contact}>Kontakt</StyledLink></li>
                <li><StyledLink to={ROUTES.products}>Producty</StyledLink></li>
                <li>
                    <AccountIcon />
                </li>
                <li>
                    <ShopingCardIcon active={isOrderOpen} />
                </li>
            </ul>
        </nav>
    )
}