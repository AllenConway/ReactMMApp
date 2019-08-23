import * as React from "react";
import styles from "./Header.module.scss";
import cabinLogo from "../../../assets/cabin.jpg";
import UserLogin from "../../UserLogin/UserLogin";
import Help from "../../Help/Help";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <Link to="/">
          <img className={styles.logo} src={cabinLogo} alt="Cabin logo" />
        </Link>        
        <UserLogin></UserLogin>
        <Help></Help>
      </div>
    </header>
  );
};

export default Header;
