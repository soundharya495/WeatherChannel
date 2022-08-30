import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { MdRoundedCorner } from "react-icons/md";

const CurrentDetail = () => {
  const { weather } = useSelector((state) => state);

  useEffect(() => {
    console.log(weather);
  }, []);

  const DetailBox = styled(Box)((theme) => ({
    width: "450px",
    height: "200px",
    background: "#1E213A",
    marginRight: "48px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }));
  return (
    <>
      {weather && (
        <Grid container justifyContent="space-evenly">
          <DetailBox lg={6}>
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontWeight: "500",
                fontSize: "16px",
                color: "#E7E7EB",
              }}
            >
              Wind status
            </Typography>
            <Grid item container justifyContent="center" alignItems="center">
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "700",
                  fontSize: "64px",
                  color: "#E7E7EB",
                }}
              >
                {" "}
                {Math.round(weather && weather.data[0].wind_spd * 2.26)}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "500",
                  fontSize: "36px",
                  color: "#E7E7EB",
                }}
              >
                mph
              </Typography>
            </Grid>
          </DetailBox>
          <DetailBox lg={6}>
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontWeight: "500",
                fontSize: "16px",
                color: "#E7E7EB",
              }}
            >
              Humidity
            </Typography>
            <Grid item container justifyContent="center" alignItems="center">
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "700",
                  fontSize: "64px",
                  color: "#E7E7EB",
                }}
              >
                {" "}
                {Math.round(weather && weather.data[0].rh)}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "500",
                  fontSize: "36px",
                  color: "#E7E7EB",
                }}
              >
                %
              </Typography>
            </Grid>
          </DetailBox>
          <DetailBox lg={6}>
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontWeight: "500",
                fontSize: "16px",
                color: "#E7E7EB",
              }}
            >
              Visibility
            </Typography>
            <Grid item container justifyContent="center" alignItems="center">
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "700",
                  fontSize: "64px",
                  color: "#E7E7EB",
                }}
              >
                {" "}
                {Math.round(weather && weather.data[0].vis)}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "500",
                  fontSize: "36px",
                  color: "#E7E7EB",
                }}
              >
                km
              </Typography>
            </Grid>
          </DetailBox>
          <DetailBox lg={6}>
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontWeight: "500",
                fontSize: "16px",
                color: "#E7E7EB",
              }}
            >
              Air Pressure
            </Typography>
            <Grid item container justifyContent="center" alignItems="center">
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "700",
                  fontSize: "64px",
                  color: "#E7E7EB",
                }}
              >
                {" "}
                {Math.round(weather && weather.data[0].pres)}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Raleway",
                  fontWeight: "500",
                  fontSize: "36px",
                  color: "#E7E7EB",
                }}
              >
                mb
              </Typography>
            </Grid>
          </DetailBox>
        </Grid>
      )}
    </>
  );
};

export default CurrentDetail;
