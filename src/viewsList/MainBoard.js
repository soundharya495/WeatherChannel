import React from "react";
import { Grid, styled, Typography } from "@mui/material";
import CurrentDetail from "./CurrentDetail";
import Forecast from "./Forecast";

const MainBoard = () => {
  const StyledGrid = styled(Grid)((theme) => ({
    background: "#100E1D",
    width: "100%",
    padding: "100px",
  }));
  return (
    <StyledGrid container justifyContent="center" alignItems="center">
      <Grid item container sx={{ color: "white" }}>
        <Forecast />
      </Grid>
      <Grid item container sx={{ color: "white", marginTop: "100px" }}>
        <CurrentDetail />
      </Grid>
    </StyledGrid>
  );
};

export default MainBoard;
