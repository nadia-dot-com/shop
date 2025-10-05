import { StyledLink } from "./StyledLink/StyledLink";
import classes from './Menu.module.css'
import { ShopingCard } from "./ShopingCart";
import { NavLink } from "react-router-dom";
// import { cn } from "../utils/cn";

export function Menu() {
    return (
        <nav>
            <ul className={classes.nav}>
                <li><StyledLink to={'/house-staff'}>Główna Strona</StyledLink></li>
                <li><StyledLink to={'kontact'}>Kontakt</StyledLink></li>
                <li><StyledLink to={'moje-konto'}>Moje Konto</StyledLink></li>
                <li><StyledLink to={'products'}>Producty</StyledLink></li>
                <li>
                    <NavLink to={'shoping-card'} >
                        {({ isActive }) => (
                            <ShopingCard active={isActive} />
                        )}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}