import React from "react";
import styles from "./styles.module.scss";
export const EnquiryForm = () => {
  return (
    <div className="flex">
      <div className={styles.imageContainer}></div>
      <form className={styles.formContainer}>
        <h2>Get In Touch</h2>
        <label>Name:</label>
        <input type="text" name="name"></input>
        <label>Email:</label>
        <input type="text" name="email"></input>
        <label>Whatsapp Number:</label>
        <input type="text" name="number"></input>
        <label>Event Date:</label>
        <input type="date" name="date" ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};
