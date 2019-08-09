import * as React from "react";
import styles from "./Main.module.scss";
import HeroCarousel from "../../HeroCarousel/HeroCarousel";


const Main: React.FC = () => {
  const mainClasses = `container-fluid ${styles["shoe-horn"]}`;

  return (
    <main>
      <div className={mainClasses} />
      <h1>Welcome to Mountain Cabin Vacations</h1>
      <HeroCarousel />
    </main>
  );
};

export default Main;
