import { RefObject } from 'react';
import { useUserContext } from '../../../../../context/UserContext'
import classes from './AddressForm.module.css'

export function AddressForm({formRef}: {formRef?: RefObject<HTMLFormElement | null>}) {
    const { user } = useUserContext();

    if (!user) return;

    const { email, address, phone } = user;

    return (
        <div className={classes.formContainer}>
            <form 
            className={classes.addressForm}
            ref={formRef}
            >
                <h2 className={classes.title}>Billing Details</h2>

                <div className={classes.inputGroup}>
                    <label>First Name *</label>
                    <input
                        className={classes.input}
                        type="text"
                        placeholder='First Name'
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Last Name *</label>
                    <input
                        className={classes.input}
                        type="text"
                        placeholder='Last Name'
                        required
                    />
                </div>
                <div className={classes.inputGroup}>
                    <label>Company Name (optional)</label>
                    <input
                        className={classes.input}
                        type="text"
                        placeholder='Company Name'
                    />
                </div>
                <div className={classes.inputGroup}>
                    <label>Country / Region *</label>
                    <input
                        className={classes.input}
                        type="text"
                        placeholder='Poland'
                        required
                    />
                </div>

                <h3 className={classes.subTitle}>Address *</h3>

                <div className={classes.inputGroup}>
                    <label>Street *</label>
                    <input
                        className={classes.input}
                        name="street"
                        defaultValue={address?.street ?? ""}
                        placeholder="Street and house number"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Postal Code *</label>
                    <input
                        className={classes.input}
                        name="postalCode"
                        defaultValue={address?.postalCode ?? ""}
                        placeholder="e.g. 12345"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Town / City *</label>
                    <input
                        className={classes.input}
                        name="city"
                        defaultValue={address?.city ?? ""}
                        placeholder="City"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Phone *</label>
                    <input
                        className={classes.input}
                        type="tel"
                        name="phone"
                        defaultValue={phone ?? ""}
                        placeholder="Phone"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Email Address *</label>
                    <input
                        className={classes.input}
                        type='email'
                        value={email}
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Order notes (optional)</label>
                    <textarea
                        name='message'
                        className={classes.textarea}
                        placeholder='Notes about your order, e.g. special notes for delivery.'
                    />
                </div>
            </form>
        </div>
    )
}