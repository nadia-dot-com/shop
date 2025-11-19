import { PaymentProps } from '../../../../../../types/checkoutTypes';

import classes from './Payment.module.css'

export function Payment({ payment, updatePayment }: { payment: PaymentProps, updatePayment: (data: PaymentProps) => void }) {

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Payment</h2>

            <div className={classes.option}>
                <label>
                    <input
                        className={classes.radio}
                        type="radio"
                        name="payment"
                        value="free"
                        checked={payment.method === "cash"}
                        onChange={() => updatePayment({ method: "cash" })}
                    />
                    Cash on delivery
                </label>
            </div>
        </div>
    )
}