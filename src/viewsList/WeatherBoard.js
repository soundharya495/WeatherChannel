import React from "react";
import SideBoard from "./SideBoard";
import MainBoard from "./MainBoard";
import Grid from "@mui/material/Grid";

const WeatherBoard = () => {
  return (
    <Grid container>
      <Grid item container sm={3}>
        <SideBoard />
      </Grid>
      <Grid item container sm={9}>
        <MainBoard />
      </Grid>
    </Grid>
  );
};

export default WeatherBoard;
