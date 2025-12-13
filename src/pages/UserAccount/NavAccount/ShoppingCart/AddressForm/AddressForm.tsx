import { FormEvent, RefObject } from 'react';
import { useUserContext } from '../../../../../context/UserContext'
import classes from './AddressForm.module.css'
import { useCheckoutContext } from '../../../../../context/CheckoutContext';
import { DataProps } from '../../../../../types/checkoutTypes';
import { COUNTRIES } from '../../../../../data/countries'; 

export function AddressForm({ formRef, onSubmit }: { formRef?: RefObject<HTMLFormElement | null>; onSubmit: (data: DataProps) => void }) {
    const { user } = useUserContext();
    const { data } = useCheckoutContext();

    if (!user) return null;

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedCheckoutData = {
            ...data,
            fullName: String(formData.get("fullName") || ""),
            company: String(formData.get("company") || ""),
            address: {
                street: String(formData.get("street") || ""),
                postalCode: String(formData.get("postalCode") || ""),
                city: String(formData.get("city") || ""),
                country: String(formData.get("country") || ""),
            },
            phone: String(formData.get("phone") || ""),
            email: String(formData.get("email") || ""),
            notes: String(formData.get("notes") || ""),
        }

        onSubmit(updatedCheckoutData)
    }

    return (
        <div className={classes.formContainer}>
            <form
                className={classes.addressForm}
                ref={formRef}
                onSubmit={handleFormSubmit}
            >
                <h2 className={classes.title}>Billing Details</h2>

                <div className={classes.inputGroup}>
                    <label>Full Name *</label>
                    <input
                        className={classes.input}
                        name='fullName'
                        type="text"
                        defaultValue={data?.fullName ?? user?.name ?? ""}
                        placeholder='Full Name'
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Company Name (optional)</label>
                    <input
                        className={classes.input}
                        name='company'
                        type="text"
                        defaultValue={data?.company ?? ""}
                        placeholder='Company Name'
                    />
                </div>
                
                <h4 className={classes.subTitle}>Address *</h4>

                <div className={classes.inputGroup}>
                    <label>Street *</label>
                    <input
                        className={classes.input}
                        name="street"
                        defaultValue={data?.address?.street ?? user?.address?.street ?? ""}
                        placeholder="Street and house number"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Postal Code *</label>
                    <input
                        className={classes.input}
                        name="postalCode"
                        defaultValue={data?.address.postalCode ?? user?.address?.postalCode ?? ""}
                        placeholder="e.g. 12345"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Town / City *</label>
                    <input
                        className={classes.input}
                        name="city"
                        defaultValue={data?.address.city ?? user?.address?.city ?? ""}
                        placeholder="City"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Country / Region *</label>
                    <select
                        className={classes.input}
                        name='country'
                        defaultValue={data?.address.country ?? user?.address?.country ?? ""}
                        required
                    >
                        <option value="">Select Country</option>

                        {
                            COUNTRIES.map(country => (
                                <option value={country}>{country}</option>
                            ))
                        }
                        
                    </select>
                </div>

                <div className={classes.inputGroup}>
                    <label>Phone *</label>
                    <input
                        className={classes.input}
                        type="tel"
                        pattern='[0-9]{9,15}'
                        name="phone"
                        defaultValue={data?.phone ?? user?.phone ?? ""}
                        placeholder="Phone"
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Email Address *</label>
                    <input
                        className={classes.input}
                        name='email'
                        type='email'
                        defaultValue={data?.email ?? user?.email ?? ""}
                        required
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Order notes (optional)</label>
                    <textarea
                        name='notes'
                        className={classes.textarea}
                        defaultValue={data?.notes ?? ""}
                        placeholder='Notes about your order, e.g. special notes for delivery.'
                    />
                </div>
            </form>
        </div>
    )
}