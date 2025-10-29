import { CSSProperties } from 'react';

import classes from './ShopNowButton.module.css';

export function ShopNowButton({ bgColor, textColor, onClick }: { bgColor: string, textColor: string, onClick: () => void }) {

    const style: CSSProperties = {
        backgroundColor: bgColor,
        color: textColor,
    }

    return (
        <button 
        className={classes.button}
        style={style}
        onClick={onClick}
        >
            • SHOP NOW
        </button>
    )
}