import React from "react";
import styles from "./styles.module.scss";
export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div>Logo</div>
      <div>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};
