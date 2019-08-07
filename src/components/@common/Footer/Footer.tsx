import * as React from "react";
import styles from "./Footer.module.scss";
import PhoneIcon from "@material-ui/icons/Phone";
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer>
        <div className={styles.contact}>
            <div className={styles["footer-app-name"]}>Mountain Cabin Vacations</div>          
            <PhoneIcon />
            <span className={styles["footer-number"]}>(888) 555-1234</span>
        </div>
        <span className={styles["footer-nav-wrapper"]}>
            <nav className={styles["external-nav"]}>
                <Link className={styles["footer-links"]} to="/about">
                  About Us
                </Link> |
                <Link className={styles["footer-links"]} to="/contact">
                  Contact Us
                </Link> |
                <Link className={styles["footer-links"]} to="/owners">
                Owners
                </Link> |
                <Link className={styles["footer-links"]} to="/management">
                Rental Management
                </Link> |
                <Link className={styles["footer-links"]} to="/privacy">
                Privacy
                </Link> |
            </nav>
            <div className={styles["legal-footer"]}><span>&copy;</span>All rights reserved.</div>    
        </span>
    </footer>
  );
};

export default Footer;
