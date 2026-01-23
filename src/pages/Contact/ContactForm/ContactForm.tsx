import { FormEvent, useRef, useState } from 'react';
import { Button } from '../../../components/Button/Button';
import { cn } from '../../../utils/cn';
import { WEB3FORMS_KEY } from '../../../api/config';

import classes from './ContactForm.module.css';
import { CONTACT_FORM_URL } from '../../../config';

export function ContactForm() {
    const [result, setResult] = useState("");
    const formRef = useRef<HTMLFormElement | null>(null);

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        formData.append("access_key", WEB3FORMS_KEY);

        try {
            const response = await fetch(CONTACT_FORM_URL, {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult(" Your submission was successful!");
                formRef.current?.reset()
            } else {
                setResult(" Something went wrong. Please try again.")
            }
        } catch (error) {
            const err = error as Error;
            setResult(`Network error: ${err.message}. Please try later.`)
        }

    };

    return (
        <section className={classes.formWrapper}>
            <form 
            className={classes.form} 
            onSubmit={onSubmit} 
            ref={formRef}
            autoComplete='on'
            >
                <h2 className={classes.title}>Enquiry Form</h2>
                <p className={classes.desc}>
                    Contact our Customer Services team by completing the form. We will endeavour to respond within 24 hours.
                </p>
                <div className={classes.inputBox}>
                    <input
                        type='email'
                        name='email'
                        className={classes.field}
                        placeholder='Email'
                        required />
                    <input
                        type='text'
                        name='name'
                        className={classes.field}
                        placeholder='Your name'
                        required />
                    <input
                        type='tel'
                        pattern='[0-9]{9,15}'
                        name='phone'
                        className={classes.field}
                        placeholder='Enter a valid phone number'
                        required />
                    <input
                        type='text'
                        name='order'
                        className={classes.field}
                        placeholder='Order number'
                        required />
                    <p className={classes.messageTitle}>Your message</p>
                    <textarea
                        name='message'
                        className={cn(classes.field, classes.textarea)}
                        placeholder='Write your message here'
                        required
                    />
                </div>
                <Button
                    bgColor="white"
                    textColor="black"
                    type="submit"
                    text={"• SEND ENQUIRY"}
                />
                <p className={cn(
                    classes.result,
                    result.toLowerCase().includes("success") && classes.success,
                    result.toLowerCase().includes("error") && classes.error
                )}
                >
                    {result}
                </p>
            </form>
        </section>
    )
}