import { CSSProperties, ReactNode } from 'react';

import classes from './Button.module.css';
import { cn } from '../../utils/cn';

export function Button({ 
    bgColor,
    textColor,
    text,
    type,
    onClick,
    children,
    disabled,
}: {
    bgColor: string,
    textColor: string,
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children?: ReactNode,
    disabled?: boolean,
}) {
    const style: CSSProperties = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <button
            className={cn(classes.button, disabled && classes.disabled)}
            style={style}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
            {text}
        </button>
    )
}