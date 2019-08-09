import * as React from "react";
import styles from "./Main.module.scss";
import HeroCarousel from "../../HeroCarousel/HeroCarousel";


const Main: React.FC = () => {
  const mainClasses = `container-fluid ${styles["shoe-horn"]}`;

  return (
    <main>
      <div className={mainClasses} />
      <p>Welcome to Mountain Cabin Vacations</p>
      <HeroCarousel />
    </main>
  );
};

export default Main;
