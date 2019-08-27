import React, { useState, useEffect } from "react";
import Greeting from "../@common/Greeting/Greeting";
import { Grid } from "@material-ui/core";
import Cabin from "./Cabin";
import { CabinModel } from "../../@core/models/Cabin.model";

const Cabins: React.FC = () => {
  //use React hooks
  const [cabinData, setCabinData] = useState<CabinModel[]>([]);
  const [cabinId, setCabinId] = useState(0);

  useEffect(() => {
    // ensure mock data is in /public folder so it can be fetched locally without getting a 404 in the browser
    fetch("cabins.json")
      .then(response => response.json())
      .then(data => setCabinData(data));
  });

  return (
    <>
      <Greeting greetingMessage="Hello from Cabins" />
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
