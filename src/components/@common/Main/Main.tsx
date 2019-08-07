import * as React from "react";
import styles from "./Main.module.scss";

const Main: React.FC = () => {
  const mainClasses = `container-fluid ${styles["shoe-horn"]}`;

  return (
    <main>
      <div className={mainClasses} />
      <p>Welcome to Mountain Cabin Vacations</p>
    </main>
  );
};

export default Main;
