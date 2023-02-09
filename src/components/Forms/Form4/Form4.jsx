import React, { useState } from "react";
import styles from "./form4.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to the server or do something else
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Contact</h2>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.formInput}
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.formInput}
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.formLabel} htmlFor="message">
          Message:
        </label>
        <textarea
          className={styles.formTextarea}
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button className={styles.formButton} type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;