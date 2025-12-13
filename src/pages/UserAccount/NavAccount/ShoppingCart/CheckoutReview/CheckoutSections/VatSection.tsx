import classes from '../CheckoutReview.module.css'

export function VatSection({ vat }: { vat: number }) {

    return (
        <section className={classes.checkoutSection}>
            <div>VAT</div>
            <div>${vat}</div>
        </section>
    )
}