import * as React from "react";
import Greeting from "../@common/Greeting/Greeting";
import { Grid } from "@material-ui/core";
import Cabin from "./Cabin";

const Cabins: React.FC = () => {
  return (
    <>
      <Greeting greetingMessage="Hello from Cabins" />
      <Grid container spacing={4}>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
        <Grid item md={3}>
          <Cabin />
        </Grid>
      </Grid>
    </>
  );
};

export default Cabins;
