import React, { useState, useEffect } from "react";
import Greeting from "../@common/Greeting/Greeting";
import { Grid } from "@material-ui/core";
import Cabin from "./Cabin";
import { CabinModel } from "../../@core/models/Cabin.model";
import CabinsApiService from '../../api/cabins.api.service';

const Cabins: React.FC = () => {
  //use React hooks
  const [cabinData, setCabinData] = useState<CabinModel[]>([]);  

  useEffect(() => {

    CabinsApiService.getCabins()
    .then(async data => await setCabinData(data));
    
  });

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
