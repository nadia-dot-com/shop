import { IoIosLogOut } from "react-icons/io";

import classes from './Logout.module.css';

export function Logout({onClick}: {onClick: ()=> void}) {

    return (
        <div 
        className={classes.logout}
        onClick={onClick}>
            Logout
        {' '}
            <IoIosLogOut 
                className={classes.icon}
            />
        </div>
    )
}