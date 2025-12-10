import classes from '../CheckoutReview.module.css';


export function TotalSection({total}: {total: number}) {

    return (
         <div className={classes.checkoutSection}>
                <div>Total</div>
                <div>${total}</div>
            </div>
    )
}

