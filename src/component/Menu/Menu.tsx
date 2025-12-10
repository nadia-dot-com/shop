import { StyledLink } from "../StyledLink/StyledLink";
import classes from './Menu.module.css'
import { ShopingCardIcon } from "./ShopingCardIcon/ShopingCartIcon";
// import { NavLink } from "react-router-dom";
import { useShopContext } from "../../context/ShopContext";
import { ROUTES } from "../../config/Routes";
import { AccountIcon } from "./AccountIcon/AccountIcon";
import { WishlistIcon } from "./WishlistIcon/WishlistIcon";
import { useToggle } from "../../hooks/useToggle";
import { useEffect } from "react";

export function Menu() {
    const [isOpen, setIsOpen] = useToggle(false);
    const { isOrderOpen } = useShopContext();

    useEffect(()=> {
        const closeMenuOnScroll = () => {
            if(isOpen) setIsOpen();
        }

        window.addEventListener("scroll", closeMenuOnScroll)
        return () => window.removeEventListener("scroll", closeMenuOnScroll)
    }, [isOpen])

    return (
        <nav className={classes.nav}>

            <ul className={classes.desktopMenu} >
                <li><StyledLink to={`${ROUTES.home}${ROUTES.mainLayout}`}>Home</StyledLink></li>
                <li><StyledLink to={ROUTES.contact}>Contact</StyledLink></li>
                <li><StyledLink to={ROUTES.products}>Products</StyledLink></li>

                <li className={classes.navIcons}>
                    <AccountIcon />

                    <StyledLink
                        to={ROUTES.guestWishlist}
                    >
                        <WishlistIcon />
                    </StyledLink>

                    <ShopingCardIcon active={isOrderOpen} />
                </li>
            </ul>

            <div className={classes.mobileMenu}>
                <div className={classes.navIcons}>
                    <AccountIcon />

                    <StyledLink
                        to={ROUTES.guestWishlist}
                    >
                        <WishlistIcon />
                    </StyledLink>

                    <ShopingCardIcon active={isOrderOpen} />
                </div>

                <div className={classes.burgerMenu}>
                    <div
                        className={classes.burgerIcon}
                        onClick={() => setIsOpen()}
                    >
                        {isOpen ?
                            <svg className={classes.iconOpen} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.5 3.8L3.8 4.5 7.3 8l-3.5 3.5.7.7L8 8.7l3.5 3.5.7-.7L8.7 8l3.5-3.5-.7-.7L8 7.3 4.5 3.8z"
                                    fill="currentColor" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                            </svg>
                        }
                    </div>

                    {isOpen ? (
                        <ul className={classes.burgerList}>
                            <li><StyledLink to={`${ROUTES.home}${ROUTES.mainLayout}`}>Home</StyledLink></li>
                            <li><StyledLink to={ROUTES.contact}>Contact</StyledLink></li>
                            <li><StyledLink to={ROUTES.products}>Products</StyledLink></li>
                        </ul>
                    ) : null
                    }
                </div>
            </div>
        </nav>
    )
}