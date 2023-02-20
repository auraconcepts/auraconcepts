import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <div>AuraConcepts</div>
      <div>
        <ul>
          <li>
            <Link className="links" to="/">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className="links" to="/ourwork">
              OurWork{" "}
            </Link>
          </li>
          <li>
            <Link className="links" to="/contacts">
              Contacts{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
