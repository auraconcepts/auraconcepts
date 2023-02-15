import React from "react";
import { ServiceCard } from "../ServiceCard/ServiceCard";
import ServicesData from "../../utils/HomeServices";
import styles from "./styles.module.scss";
export const Services = () => {
  return (
    <div className={styles.servicesContainer}>
      <h2>Our Services</h2>
      <div>
        {ServicesData.map((element, index) => {
          return (
            <ServiceCard
              image={element.image}
              title={element.title}
              description={element.description}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};
