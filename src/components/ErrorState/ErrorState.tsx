import classes from './ErrorState.module.css'

export function ErrorState({ message }: { message: string }) {
    return <div className={classes.errorState}>{message}</div>;
}
