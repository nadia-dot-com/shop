import { useEffect } from 'react';
import { useOptions } from '../../../../../../../hooks/options/useOptions'; 
import { PaymentMethod } from '../../../../../../../types/api/options';

import classes from './Payment.module.css'

export function Payment({ payment, updatePayment }: { payment: PaymentMethod | null, updatePayment: (data: PaymentMethod) => void }) {
    const { data } = useOptions();

    const paymentOptions = data?.paymentMethods ?? [];

    useEffect(() => {
        if (!payment && paymentOptions.length > 0) {
            updatePayment(paymentOptions[0])
        }
    }, [payment, paymentOptions, updatePayment])

    return (
        <fieldset className={classes.wrapper}>
            <legend className={classes.title}>Payment</legend>

            {paymentOptions.map(method => (
                <div className={classes.option} key={method.id}>
                    <label >
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
        </fieldset>
    )
}