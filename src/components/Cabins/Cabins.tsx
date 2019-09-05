import React, { useState, useEffect } from "react";
import Greeting from "../@common/Greeting/Greeting";
import { Grid } from "@material-ui/core";
import Cabin from "./Cabin";
import { CabinModel } from "../../@core/models/Cabin.model";
import CabinsApiService from "../../api/cabins.api.service";
import fetchCabinDetailsAction from "../../actions/fetchCabinDetailsAction";
import { store } from '../../index';

const Cabins: React.FC = () => {
  //use React hooks
  const [cabinData, setCabinData] = useState<CabinModel[]>([]);

  useEffect(() => {
    //Dispatch the fetchDetailsAction
    CabinsApiService.getCabins().then(
      async data => await store.dispatch(fetchCabinDetailsAction(data))
    );
    
    //Subscribe to the sotre and get the state when changes occur
    store.subscribe(() => setCabinData(store.getState()));
  }, []);

  return (
    <>
      <Greeting greetingMessage="Mountain Vacation Cabins" />
      <Grid container spacing={4}>
        {cabinData.map(cabin => (
          <Grid key={cabin.id} item md={3}>
            <Cabin {...cabin} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cabins;
