import classes from './VatSection.module.css'

export function Vat({ vat }: { vat: number}) {

    return (
        <section className={classes.checkoutSection}>
            <div>VAT</div>
            <div>${vat}</div>
        </section>
    )
}