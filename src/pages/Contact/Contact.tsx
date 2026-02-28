import { ContactDescription } from "./ContactDescription/ContactDescription";
import { ContactForm } from "./ContactForm/ContactForm";

import classes from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={classes.contactWrapper}>
      <ContactDescription />
      <ContactForm />
    </div>
  );
}
