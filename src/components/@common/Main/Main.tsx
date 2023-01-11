import * as React from "react";
import styles from "./Main.module.scss";
import HeroCarousel from "../../HeroCarousel/HeroCarousel";
import { Route, Switch } from "react-router";
import Cabins from "../../Cabins/Cabins";
import Reservations from "../../Reservations/Reservations";
import CabinSpecials from "../../Cabins/CabinSpecials";
import Admin from "../../Admin/Admin";
import { Container } from "@mui/material";

const Main: React.FC = () => {
  // eslint-disable-next-line
  const cssStyles = styles;

  return (
    <main>
      <React.Fragment>        
        <Container >
          <Switch>
            <Route exact path="/" component={HeroCarousel} />
            <Route path="/cabins" component={Cabins} />
            <Route path="/reservations" component={Reservations} />
            <Route path="/specials" component={CabinSpecials} />
            <Route path="/admin" component={Admin} />
          </Switch>
        </Container>
      </React.Fragment>
    </main>
  );
};

export default Main;
