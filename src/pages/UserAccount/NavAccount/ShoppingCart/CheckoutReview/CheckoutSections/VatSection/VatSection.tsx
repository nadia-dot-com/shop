import classes from './VatSection.module.scss'

export function Vat({ vat }: { vat: number}) {

    return (
        <section className={classes.checkoutSection}>
            <div>VAT</div>
            <div>${vat.toFixed(2)}</div>
        </section>
    )
}