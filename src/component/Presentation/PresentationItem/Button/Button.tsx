import { cn } from '../../../../utils/cn';

import classes from './Button.module.css';
import { ButtonProps } from "../../../../types/types"; 

export function Button({ text, className, ...props }: ButtonProps) {

    return (
        <button className={cn(classes.button, className)}
            {...props}
        >
            {text}
        </button>
    )
}