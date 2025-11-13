import { StyledLink } from "../../../component/StyledLink/StyledLink";
import { ROUTES } from "../../../config/Routes";

import classes from './NavAccount.module.css';

export function NavAccount() {

    return (
        <ul className={classes.nav}>
          <li >
            <StyledLink to={ROUTES.profile}>My Profile </StyledLink>
          </li>
          <li>
            <StyledLink to={ROUTES.shoppingCart} >Shopping Cart</StyledLink>
          </li>
          <li>
            <StyledLink to={ROUTES.myOrders}>My Orders</StyledLink>
          </li>
        </ul>
    )
}