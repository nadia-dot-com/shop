import { ButtonProps } from '../types/types';
import { cn } from '../utils/cn';
import classes from './ButtonScrollX.module.css';

export function ButtonRight({onClick, className, ...props}: ButtonProps) {
    return (
        <button onClick={onClick} className={cn(classes.buttonScrollX, className)} {...props} >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 4l8 8-8 8" />
            </svg>
        </button >
    )
}