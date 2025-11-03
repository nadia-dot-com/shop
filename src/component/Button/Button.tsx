import { CSSProperties, ReactNode } from 'react';

import classes from './Button.module.css';

export function Button({ bgColor,
    textColor,
    text,
    type,
    onClick,
    children,
}: {
    bgColor: string,
    textColor: string,
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void,
    children: ReactNode,
}) {
    const style: CSSProperties = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <button
            className={classes.button}
            style={style}
            onClick={onClick}
            type={type}
        >
            {children}
            {text}
        </button>
    )
}