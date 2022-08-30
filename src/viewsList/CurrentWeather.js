import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button, IconButton, Drawer, styled } from "@mui/material";
import { MdGpsFixed } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import SearchPanel from "./SearchPanel";
import theme from "../components/Theme/theme";
import clouds from "../images/clouds.png";
import Shower from "../images/Shower.png";
import moment from "moment";
import Spinner from "../components/Spinner";
import {
  get_current_weather,
  get_current_weather_gps,
} from "../redux/actions/action";

const CurrentWeather = () => {
  const [search, setSearch] = useState(false);
  const { weather, loading } = useSelector((state) => state);
  const dispatch = useDispatch();
  const StyledDrawer = styled(Drawer)(() => ({
    "& .MuiPaper-root": {
      background: theme.palette.secondary.main,
      padding: "20px",
      width: "25%",
    },
  }));

  const StyledGrid = styled(Grid)(() => ({
    background: `linear-gradient(rgba(30, 33, 58, 0.8),rgba(30, 33, 58, 0.8)),url(${clouds})`,
    width: "650px",
    height: "400px",
    backgroundRepeat: "no-repeat",
    marginLeft: "-112px",
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }));

  useEffect(() => {
    getCurrentLocationWeather();
  }, []);

  const getCurrentLocationWeather = (e) => {
    console.log("Geolocation", e);

    navigator.geolocation.getCurrentPosition(function (position) {
      dispatch(
        get_current_weather_gps(
          position.coords.latitude,
          position.coords.longitude
        )
      );
    });
  };

  if (loading === true) {
    return <Spinner />;
  }
  return (
    <>
      {search ? (
        <StyledDrawer open={search} onClose={() => setSearch(false)}>
          <SearchPanel closeSearch={() => setSearch(false)} />
        </StyledDrawer>
      ) : null}
      <Grid sx={{ margin: "50px 0px" }} container>
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "0px 20px" }}
        >
          <Button
            variant="contained"
            sx={{
              background: "gray",
              "&:hover": {
                background: "gray",
              },
            }}
            onClick={() => {
              setSearch(true);
            }}
          >
            Search for locations
          </Button>
          <Button
            onClick={(e) => {
              getCurrentLocationWeather(e);
            }}
          >
            <MdGpsFixed style={{ color: "gray", fontSize: "40px" }} />
          </Button>
        </Grid>
        {weather && (
          <>
            <StyledGrid item container>
              <img
                src={`https://www.weatherbit.io/static/img/icons/${
                  weather && weather.data[0].weather.icon
                }.png`}
                alt="Shower"
                style={{
                  width: "200px",
                  marginLeft: "112px",
                }}
              />
            </StyledGrid>
            <Grid
              item
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <h1 style={{ fontSize: "54px", color: "rgb(145, 143, 143)" }}>
                {weather.data[0].temp} <span>℃</span>
              </h1>
              <h2 style={{ marginTop: "30px", color: "rgb(145, 143, 143)" }}>
                {weather && weather.data[0].weather.description}
              </h2>
              <p
                style={{
                  color: "rgb(145, 143, 143)",
                  marginTop: "50px",
                  fontSize: "24px",
                }}
              >
                <span>
                  Today .{" "}
                  {moment(weather && weather.data[0].ob_time).format(
                    "ddd D MMMM "
                  )}
                </span>
              </p>
              <p
                style={{
                  color: "rgb(145, 143, 143)",
                  marginTop: "25px",
                  fontSize: "24px",
                }}
              >
                <ImLocation2 />
                &nbsp;
                <span>{weather && weather.data[0].city_name}</span>
              </p>
            </Grid>
          </>
        )}
      </Grid>
    </>
  );
};

export default CurrentWeather;
