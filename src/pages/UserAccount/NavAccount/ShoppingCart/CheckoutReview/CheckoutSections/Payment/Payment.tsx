import { useOptions } from '../../../../../../../hooks/useOptions';
import { PaymentMethod } from '../../../../../../../types/api/options';

import classes from './Payment.module.css'

export function Payment({ payment, updatePayment }: { payment: PaymentMethod | null, updatePayment: (data: PaymentMethod) => void }) {
    const { data } = useOptions();

    const paymentOptions = data?.paymentMethods ?? [];

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.title}>Payment</h2>

            {paymentOptions.map(method => (
                <div className={classes.option}>
                    <label key={method.id}>
                        <input
                            className={classes.radio}
                            type="radio"
                            checked={payment?.id === method.id}
                            onChange={() => updatePayment(method)}
                        />
                        {method.name}
                    </label>
                </div>
            ))}


        </div>
    )
}