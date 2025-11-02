import { ContactDescription } from "./ContactDescription/ContactDescription";

import classes from './Contact.module.css';
import { ContactForm } from "./ContactForm/ContactForm";

export function Contact() {

    return (
        <div className={classes.contactWrapper}>
            <ContactDescription/>
            <ContactForm/>
        </div>
    )
}