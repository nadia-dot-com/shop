import { StyledLink } from "./StyledLink/StyledLink";
import classes from './Menu.module.css'

export function Menu() {
    return (
        <nav>
            <ul className={classes.nav}>
                <li><StyledLink to={'/HOUSE-STAFF'}>Główna Strona</StyledLink></li>
                <li><StyledLink to={'KONTAKT'}>Kontakt</StyledLink></li>
                <li><StyledLink to={'MOJE-KONTO'}>Moje Konto</StyledLink></li>
                <li><StyledLink to={'PRODUCTS'}>Producty</StyledLink></li>
            </ul>
        </nav>
    )
}