import classes from './OrderComplete.module.css';

import Lottie from 'lottie-react';
import completed from '../../../../../animations/completed.json';

export function OrderComplete() {

    return (
    <div className={classes.orderComplete}>
        <Lottie
        animationData={completed}
        loop={false}
        />
        <h3 className={classes.title}>Order Completed</h3>
    </div>
    )
}