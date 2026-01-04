import Lottie from "lottie-react";
import warning from '../../animations/warning.json'

import classes from './ErrorFallback.module.css';

export function ErrorFallback() {

    return (
        <div className={classes.errorFallback} >
            <Lottie
                animationData={warning}
                loop={false}
            />
            <h3 className={classes.title}>Something went wrong...</h3>
        </div >
    )
}