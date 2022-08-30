import React, { useState, useEffect, useCallback } from "react";
import {
  Grid,
  TextField,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";

import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { CgClose } from "react-icons/cg";
import {
  get_cities,
  get_current_weather,
  get_forecast,
} from "../redux/actions/action";
import Spinner from "../components/Spinner";
import theme from "../components/Theme/theme";

const SearchPanel = ({ closeSearch }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const { cities, error, loading } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const getCities = (e) => {
    e.preventDefault();
    dispatch(get_cities(country));
    console.log(cities);
    setCity("");
  };

  const getCurrentWeather = useCallback((currentCity) => {
    dispatch(get_current_weather(currentCity));
    dispatch(get_forecast(currentCity));
    closeSearch();
  }, []);

  const updatedCities =
    cities &&
    cities.map((city) => ({
      label: city,
      value: city,
      ...city,
    }));

  if (loading === true) {
    return <Spinner />;
  }

  return (
    <Grid container direction="column">
      <Grid item alignSelf="flex-end">
        <CgClose onClick={closeSearch} className="closeSearchIcon" />
      </Grid>
      <Grid
        item
        container
        justifyContent="space-evenly"
        sx={{ marginTop: "40px" }}
      >
        <TextField
          placeholder="Enter Country"
          sx={{
            color: "#E7E7EB",
            border: "1px solid #E7E7EB",
            borderRadius: "5px",
            "&:focus": {
              border: "none",
            },
            input: {
              color: "#E7E7E8",
            },
          }}
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
        <Button
          variant="contained"
          sx={{
            background: "#3C47E9",
            "&:hover": {
              background: "#3C47E9",
            },
          }}
          onClick={(e) => getCities(e)}
        >
          Get Cities
        </Button>
      </Grid>
      {cities && cities.length !== 0 && (
        <Grid
          item
          container
          justifyContent="space-evenly"
          sx={{ marginTop: "40px" }}
        >
          <FormControl variant="filled" sx={{ background: "white" }}>
            <InputLabel>Select City</InputLabel>
            <Select
              sx={{
                background: "white",
                color: "gray",
                border: "none",
                borderRadius: "5px",
                "&:focus": {
                  border: "none",
                },
                width: "200px",
                label: {
                  color: "gray",
                },
              }}
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
                getCurrentWeather(event.target.value);
              }}
            >
              {cities &&
                cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchPanel;
