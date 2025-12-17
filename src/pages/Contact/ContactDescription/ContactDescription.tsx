import classes from './ContactDescription.module.css'

export function ContactDescription() {
    return (
        <div className={classes.background}>
            <h2 className={classes.text}>
                We’re happy to answer questions or help you with returns.
                <br />
                Please fill out the form below if you need assistance.
            </h2>
        </div>
    )
}