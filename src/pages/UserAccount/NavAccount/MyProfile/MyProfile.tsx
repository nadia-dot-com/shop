import { FormEvent } from "react";
import { useUserContext } from "../../../../context/UserContext";

import classes from './MyProfile.module.css';
import { Button } from "../../../../components/Button/Button";
import { toast } from "react-toastify";
import { COUNTRIES } from "../../../../data/countries";

export function MyProfile() {
    const { user, updateUser } = useUserContext();

    if (!user) return null;
    const { name, email, address } = user;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedUserAdress = {
            ...user,
            phone: String(formData.get("phone") || ""),
            address: {
                street: String(formData.get("street") || ""),
                postalCode: String(formData.get("postalCode") || ""),
                city: String(formData.get("city") || ""),
                country: String(formData.get("country") || ""),
            }
        };

        updateUser(updatedUserAdress);
        toast.success(`Address Saved!`)
    };

    return (
        <div className={classes.formContainer}>

            <form
                className={classes.userForm}
                onSubmit={handleSubmit}>
                <h2 className={classes.title}>My Profile</h2>
                <div className={classes.inputGroup}>
                    <label>Name</label>
                    <input
                        className={classes.input}
                        value={name}
                        readOnly
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Email</label>
                    <input
                        className={classes.input}
                        value={email}
                        readOnly
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Phone</label>
                    <input
                        className={classes.input}
                        pattern='[0-9]{9,15}'
                        type="tel"
                        name="phone"
                        defaultValue={user?.phone ?? ""}
                        placeholder="Phone"
                    />
                </div>

                <h4 className={classes.subTitle}>Address</h4>

                <div className={classes.inputGroup}>
                    <label>Street</label>
                    <input
                        className={classes.input}
                        name="street"
                        defaultValue={address?.street ?? ""}
                        placeholder="Street and house number"
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Postal Code</label>
                    <input
                        className={classes.input}
                        name="postalCode"
                        defaultValue={address?.postalCode ?? ""}
                        placeholder="e.g. 12345"
                    />


                </div>
                <div className={classes.inputGroup}>
                    <label>City</label>
                    <input
                        className={classes.input}
                        name="city"
                        defaultValue={address?.city ?? ""}
                        placeholder="City"
                    />
                </div>

                <div className={classes.inputGroup}>
                    <label>Country / Region *</label>
                    <select
                        className={classes.input}
                        name='country'
                        defaultValue={address?.country ?? ""}
                        required
                    >
                        <option value="">Select Country</option>

                        {
                            COUNTRIES.map(country => (
                                <option key={country} value={country}>{country}</option>
                            ))
                        }
                    </select>
                </div>

                <div className={classes.buttonWrapper}>
                    <Button
                        bgColor="black"
                        textColor="white"
                        text="• SAVE CHANGES"
                    />
                </div>

            </form>
        </div>
    )
}