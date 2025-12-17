import { Menu } from "../Menu/Menu";
import { StyledLink } from "../StyledLink/StyledLink";

import classes from './Header.module.css';
import { ROUTES } from "../../config/Routes";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import { cn } from "../../utils/cn";

export default function Header() {
    const {isScrollingUp} = useScrollDirection();

    return (
        <header className={cn(
            classes.header, 
            isScrollingUp ? classes.headerVisible : classes.headerHidden)}>
            <StyledLink to={`${ROUTES.home}${ROUTES.mainLayout}`} className={classes.logo}>House Staff</StyledLink>
            <Menu />
        </header>
    )
}