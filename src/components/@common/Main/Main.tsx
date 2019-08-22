import * as React from "react";
import styles from "./Main.module.scss";
import HeroCarousel from "../../HeroCarousel/HeroCarousel";
import {  
  Route,
  Switch,
} from "react-router-dom";
import Cabins from "../../Cabins/Cabins";
import Reservations from "../../Reservations/Reservations";
import CabinSpecials from '../../Cabins/CabinSpecials';
import Admin from '../../Admin/Admin';

const Main: React.FC = () => {
  const mainClasses = `container-fluid ${styles["shoe-horn"]}`;

  return (
    <main>
      <div className={mainClasses} />      
        <Switch>
          <Route exact path="/" component={HeroCarousel} />
          <Route path="/cabins" component={Cabins} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/specials" component={CabinSpecials} />
          <Route path="/admin" component={Admin} />
        </Switch>
    </main>
  );
};

export default Main;
