import React, { useEffect, useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material";
import { get_forecast_gps } from "../redux/actions/action";
import moment from "moment";

const Forecast = () => {
  const dispatch = useDispatch();
  const { forecast } = useSelector((state) => state);

  const StyledBox = styled(Box)(() => ({
    width: "130px",
    height: "177px",
    background: "#1E213A",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }));
  useEffect(() => {
    getCurrentLocationForecast();
  }, []);

  const getCurrentLocationForecast = (e) => {
    console.log("Geolocation", e);

    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        get_forecast_gps(position.coords.latitude, position.coords.longitude)
      );
    });
  };

  return (
    <Grid container justifyContent="space-around">
      {forecast &&
        forecast.map((forecastlist) => (
          <StyledBox>
            <Typography>
              {moment(forecastlist && forecastlist.datetime).format(
                "ddd D MMM "
              )}
            </Typography>
            <Grid item>
              <img
                style={{ width: "50px", height: "50px" }}
                src={`https://www.weatherbit.io/static/img/icons/${
                  forecastlist && forecastlist.weather.icon
                }.png`}
                alt={forecastlist && forecastlist.weather.description}
              />
            </Grid>
            <Grid item container justifyContent="space-around">
              <Typography>{forecastlist && forecastlist.max_temp}°C</Typography>
              <Typography>{forecastlist && forecastlist.min_temp}°C</Typography>
            </Grid>
          </StyledBox>
        ))}
    </Grid>
  );
};

export default Forecast;
