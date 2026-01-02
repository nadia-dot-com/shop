import classes from './OrderComplete.module.css';

import Lottie from 'lottie-react';
import completed from '../../../../../animations/completed.json';
import warning from '../../../../../animations/warning.json'

export function OrderComplete({ isError }: { isError: boolean }) {
    console.log(isError)

    if (isError) {
        return <div className={classes.orderComplete} >
            <Lottie
                animationData={warning}
                loop={false}
            />
            <h3 className={classes.title}>Order Failed. Try again later.</h3>
        </div >
    }

    return (<div className={classes.orderComplete}>
        <Lottie
            animationData={completed}
            loop={false}
        />
        <h3 className={classes.title}>Order Completed</h3>
    </div>)

}