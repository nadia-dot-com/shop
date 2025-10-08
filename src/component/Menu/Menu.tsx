import { StyledLink } from "../StyledLink/StyledLink";
import classes from './Menu.module.css'
import { ShopingCardIcon } from "../ShopingCardIcon/ShopingCartIcon";
// import { NavLink } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";

export function Menu() {
    const {isOrderOpen} = useShopContext();
    return (
        <nav>
            <ul className={classes.nav} >
                <li><StyledLink to={'/house-staff'}>Główna Strona</StyledLink></li>
                <li><StyledLink to={'kontact'}>Kontakt</StyledLink></li>
                <li><StyledLink to={'moje-konto'}>Moje Konto</StyledLink></li>
                <li><StyledLink to={'products'}>Producty</StyledLink></li>
                <li>
                    
                            <ShopingCardIcon active={isOrderOpen} />
                     
                </li>
            </ul>
        </nav>
    )
}