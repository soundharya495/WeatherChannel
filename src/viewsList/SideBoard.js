import React, { useState } from "react";
import { Grid } from "@mui/material";
import theme from "../components/Theme/theme";
import SearchPanel from "../views/SearchPanel";
import CurrentWeather from "./CurrentWeather";

const SideBoard = () => {
  return (
    <Grid container direction="column" bgcolor={theme.palette.secondary.main}>
      <CurrentWeather />
    </Grid>
  );
};

export default SideBoard;
