import * as React from "react";
import { useState, useEffect } from "react";
import styles from "./Main.module.scss";
import HeroCarousel from "../../HeroCarousel/HeroCarousel";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import CabinDetail from "../../Cabins/CabinDetail";
import Cabins from "../../Cabins/Cabins";

const Main: React.FC = (props) => {
  const mainClasses = `container-fluid ${styles["shoe-horn"]}`;



  useEffect(() => {
    // if(props.location.pathname === '/cabins') {
    //   //props.history.replace("/cabins");
    // }
  });

  return (
    <main>
      <div className={mainClasses} />
      <h1>Welcome to Mountain Cabin Vacations</h1>
        <Switch>
          <Route exact path="/" component={HeroCarousel} />
          <Route path="/cabins" component={Cabins} />
          <Route path="/reservations" component={Cabins} />
        </Switch>
    </main>
  );
};

export default Main;
