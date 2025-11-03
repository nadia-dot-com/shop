import { RiAccountCircleFill } from "react-icons/ri";

import classes from './AccountIcon.module.css';
import { useUserContext } from "../../../context/UserContext";
import { cn } from "../../../utils/cn";

export function AccountIcon({active}: {active: boolean}) {
    const {toggleModalOpen } = useUserContext();

    return (
        <RiAccountCircleFill
            className={cn(
                classes.accountIcon,
                active && classes.active
            )}
            onClick={() => toggleModalOpen()}
        />
    )
}