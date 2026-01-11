import Lottie from "lottie-react";
import warning from '../../../../../animations/warning.json'

import classes from './OrderError.module.css'

export function OrderError({message}: {message: string}) {

     return <div className={classes.orderError} >
            <Lottie
                animationData={warning}
                loop={false}
            />
            <h3 className={classes.title}>{message}</h3>
        </div >
}