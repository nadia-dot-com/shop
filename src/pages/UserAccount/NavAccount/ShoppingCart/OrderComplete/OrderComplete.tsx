import classes from './OrderComplete.module.css';

import Lottie from 'lottie-react';
import completed from '../../../../../animations/completed.json';
import warning from '../../../../../animations/warning.json'

export function OrderComplete({ error }: { error: Error | null }) {
    if (error) {
        console.log('Order creation failed due to the error: ' + error.message)

        return <div className={classes.orderComplete} >
            <Lottie
                animationData={warning}
                loop={false}
            />
            <h3 className={classes.title}>Ups... Something went wrong. Try again later.</h3>
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