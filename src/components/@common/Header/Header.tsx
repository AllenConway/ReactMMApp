import * as React from "react";
import styles from "./Header.module.scss";
import cabinLogo from "../../../assets/cabin.jpg";
import UserLogin from "../../UserLogin/UserLogin";
import Help from "../../Help/Help";

const Header: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <img className={styles.logo} src={cabinLogo} alt="Cabin logo" />
        <UserLogin></UserLogin>
        <Help></Help>
      </div>
    </header>
  );
};

export default Header;
