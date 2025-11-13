import { FormEvent } from "react";
import { useUserContext } from "../../../../context/UserContext";

import classes from './MyProfile.module.css';
import { Button } from "../../../../component/Button/Button";
import { toast } from "react-toastify";

export function MyProfile() {
    const { user, updateUser } = useUserContext();

    if (!user) return
    const { name, email, address } = user;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedUserAdress = {
            ...user,
            address: {
                street: String(formData.get("street") || ""),
                postalCode: String(formData.get("postalCode") || ""),
                city: String(formData.get("city") || "")
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

                <h3 className={classes.subTitle}>Address</h3>

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

                <div className={classes.buttonWrapper}>
                    <Button
                        bgColor="black"
                        textColor="white"
                        text="• SAVE ADDRESS"
                    />
                </div>

            </form>
        </div>
    )
}