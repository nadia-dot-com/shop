import { useEffect } from 'react';
import { useOptions } from '../../../../../../../hooks/useOptions';
import { DeliveryMethod } from '../../../../../../../types/api/options';

import classes from './Shipping.module.css';

export function Shipping({ delivery, updateDelivery }: { delivery: DeliveryMethod | null, updateDelivery: (data: DeliveryMethod) => void }) {
      const { data } = useOptions();

      const deliveryOptions = data?.deliveryMethods ?? [];

      useEffect(() => {
        if(!delivery && deliveryOptions.length > 0) {
            updateDelivery(deliveryOptions[0])
        }
      }, [delivery, deliveryOptions, updateDelivery])

    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>Shipping</h3>

            {deliveryOptions.map(method => (
                <div key={method.id} className={classes.option}>
                    <label className={classes.label} key={method.id}>
                        <input
                            className={classes.radio}
                            type="radio"
                            checked={delivery?.id === method.id}
                            onChange={() => updateDelivery(method)}
                        />
                        {method.name}</label>
                    <p className={classes.price}>${method.price}</p>
                </div>
            ))}

        </div>
    )
}