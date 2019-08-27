import React, { useState } from "react";
import styles from "./Cabin.module.scss";
import { CabinModel } from "../../@core/models/Cabin.model";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";

const Cabin: React.FC<CabinModel> = (props) => {

  const bull = <span className={styles.bullet}>•</span>;

  return (
    <>
      <Card className={styles.card}>
        <CardContent>
          <Typography className={styles.title} color="textSecondary">
            {props.name}
          </Typography>
          <Typography component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={styles.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Cabin Details</Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cabin;
