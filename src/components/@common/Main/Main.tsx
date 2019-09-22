import * as React from "react";
import styles from "./Main.module.scss";

const Main: React.FC = () => {
  
  const mainClasses = `${styles.title} ${styles["title-main"]}`;

  return (
    <main>
      <h1 className={mainClasses}>Welcome to Mountain Cabin Vacations</h1>
    </main>
  );
};

export default Main;
