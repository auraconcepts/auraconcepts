import React from "react";
import styles from "./styles.module.scss";
export const ServiceCard = ({ image, title, description }) => {
  return (
    <div className={styles.ServiceCardContainer}>
      <div>
        <img src={image}></img>
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
