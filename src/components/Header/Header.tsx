import { Menu } from "../Menu/Menu";
import { StyledLink } from "../StyledLink/StyledLink";

import classes from "./Header.module.css";
import { ROUTES } from "../../config/Routes";
import { useScrollUp } from "../../hooks/useScrollUp";
import { cn } from "../../utils/cn";

export default function Header() {
  const { isScrollingUp } = useScrollUp();

  return (
    <header
      className={cn(
        classes.header,
        isScrollingUp ? classes.headerVisible : classes.headerHidden,
      )}
    >
      <StyledLink
        to={`${ROUTES.home}${ROUTES.mainLayout}`}
        className={classes.logo}
      >
        House Staff
      </StyledLink>
      <Menu />
    </header>
  );
}
