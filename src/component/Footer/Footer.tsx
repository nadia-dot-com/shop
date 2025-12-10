import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";

import classes from './Footer.module.css'
import { StyledLink } from "../StyledLink/StyledLink";
import { ROUTES } from "../../config/Routes";
import { ADDRESS, GOOLE_MAPS_URL } from "../../data/shop";

export default function Footer() {

    return (
        <footer className={classes.footer}>
            <ul className={classes.info}>
                <li>
                    <FaPhoneAlt />
                    <a href="tel:+48111111111">
                        +48 111 111 111
                    </a>
                </li>
                <li>
                    <MdOutlineAlternateEmail />
                    <a href="mailto:housestaffcontact@gmail.com">
                        housestaffcontact@gmail.com
                    </a>
                </li>
                <li className={classes.time}>
                    <IoIosTime />
                    Mon – Sun: 10:00 – 20:00
                </li>
                <li>
                    <MdPlace />
                    <a
                        href={GOOLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {ADDRESS}
                    </a>
                </li>
            </ul>
            <div className={classes.socials}>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                >
                    <FaSquareFacebook />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                >
                    <FaSquareInstagram />
                </a>
            </div>
            <div className={classes.contact}>
                <StyledLink to={ROUTES.contact}>
                    More Contact
                    <HiOutlineExternalLink />
                </StyledLink>
            </div>
            <div className={classes.rights}>All rights reserved &copy;</div>
        </footer >
    )
}