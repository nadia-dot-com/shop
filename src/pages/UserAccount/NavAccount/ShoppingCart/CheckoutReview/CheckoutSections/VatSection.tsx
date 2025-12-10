import classes from '../CheckoutReview.module.css'

export function VatSection({vat}:{vat: number}) {

    return (
        <div className={classes.checkoutSection}>
                <div>VAT</div>
                <div>${vat}</div>
            </div>
    )
}