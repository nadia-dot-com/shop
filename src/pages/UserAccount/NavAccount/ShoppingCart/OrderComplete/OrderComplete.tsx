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
        <h2>Order Completed</h2>
    </div>
    )
}