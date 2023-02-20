import React from "react";
import styles from "./styles.module.scss";
export const ImageCard = ({ image }) => {
  return (
    <div className={styles.imageCardContainer}>
      <img src={image} className={styles.image}></img>
    </div>
  );
};
