import classes from '../CheckoutReview.module.css';


export function TotalSection({ total }: { total: number }) {

    return (
        <section className={classes.checkoutSection}>
            <div>Total</div>
            <div>${total}</div>
        </section>
    )
}

