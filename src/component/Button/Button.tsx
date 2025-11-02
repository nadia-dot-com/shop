import { CSSProperties } from 'react';

import classes from './Button.module.css';

export function Button({ bgColor,
    textColor,
    text,
    type,
    onClick
}: {
    bgColor: string,
    textColor: string,
    text: string,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
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
            {text}
        </button>
    )
}