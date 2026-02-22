import { getImagePath } from "../../../utils/getImagePath";
import classes from "./ContactDescription.module.css";

export function ContactDescription() {
  return (
    <section className={classes.background} style={{backgroundImage: `url(${getImagePath("/img/contact/contact.webp")})`}}>
      <h2 className={classes.text}>
        We’re happy to answer questions or help you with returns.
        <br />
        Please fill out the form below if you need assistance.
      </h2>
    </section>
  );
}
