import { cn } from '../../utils/cn'
import classes from './ScrollButtonX.module.css';

export type ScrollButtonXProps = {
    onClick?: () => void;
    direction: 'left' | 'right';
    className?: string;
    disabled?: boolean;
}

export function ScrollButtonX({ onClick, direction, className, disabled }: ScrollButtonXProps) {

    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className={cn(classes.scrollButtonX,
                direction === 'left' ? classes.left : classes.right,
                disabled && classes.disabled,
                className)}
        >
            <svg className={classes.icon} viewBox="0 0 24 24">
                {direction === 'left' ? (
                    <path d="M16 4l-8 8 8 8" />
                ) : (
                    <path d="M8 4l8 8-8 8" />
                )}
            </svg>
        </button>

    )
}