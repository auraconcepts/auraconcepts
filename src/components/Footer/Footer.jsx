import React from "react";
import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <div className={styles.footerBox}>
          <h4>OUR ADDRESS </h4>
          <p>
            Regal Building, Connaught Place,<br></br> New Delhi 110001
          </p>
        </div>
        <div className={styles.footerBox}>
          <h4>FOR INQUIRIES</h4>
          <p>1234@example.com</p>
        </div>
        <div className={styles.footerBox}>
          <h4>CONTACT US</h4>
          <p>+91XXXXXXXXX</p>
        </div>
      </div>
      <hr></hr>
      <div>
        Copyright 2023 © <span className="text-[#936a76]">AuraConcepts</span>.
        All Rights Reserved.
      </div>
    </div>
  );
};
