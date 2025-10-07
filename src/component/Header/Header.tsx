import { Menu } from "../Menu/Menu";
import { StyledLink } from "../StyledLink/StyledLink";

import classes from './Header.module.css';

export default function Header() {
    return (
        <header>
            <div>
                <StyledLink to={'/house-staff'} className={classes.logo}>House Staff</StyledLink>
                <Menu />
            </div>
            <div className={classes.presentation}></div>
        </header>
    )
}