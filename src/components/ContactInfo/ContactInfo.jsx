import React from "react";
import styles from "./styles.module.scss";
export const ContactInfo = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.infoBox}>
        <h4>HEAD OFFICE </h4>
        <p>
          Regal Building, Connaught Place,<br></br> New Delhi 110001
        </p>
      </div>
      <div className={styles.infoBox}>
        <h4>REGIONAL OFFICE</h4>
        <p>
          SCO 35, Sector 7<br></br> Chandigarh 160007{" "}
        </p>
      </div>
    </div>
  );
};
