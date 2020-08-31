import { Grid } from "@material-ui/core";
import React from "react";
import SimpleCard from "../SimpleCard/SimpleCard.jsx";

const Cards = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleCard></SimpleCard>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SimpleCard></SimpleCard>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
