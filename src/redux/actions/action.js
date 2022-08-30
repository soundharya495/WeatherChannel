import axios from "axios";

import {
  GET_CITIES,
  GET_COORDS,
  ERROR_MESSAGE,
  GET_CURRENT_WEATHER,
  SET_LOADING,
  GET_FORECAST,
} from "../types";

export const get_cities = (country) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  try {
    const res = await axios.post(
      "https://countriesnow.space/api/v0.1/countries/cities",
      { country }
    );

    dispatch({
      type: GET_CITIES,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response.data.msg,
    });
  }
};

export const get_current_weather = (city) => async (dispatch) => {
  console.log(city);
  try {
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${city}&key=db5e8b508dfc4076b97a67b5eece4f12`
    );
    console.log(res.data);
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const get_current_weather_gps = (lat, lon) => async (dispatch) => {
  console.log(lat, lon, "hit");
  try {
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=db5e8b508dfc4076b97a67b5eece4f12`
    );
    console.log(res.data);
    dispatch({
      type: GET_CURRENT_WEATHER,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const get_forecast = (city) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  try {
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=db5e8b508dfc4076b97a67b5eece4f12`
    );
    console.log(res.data);
    dispatch({
      type: GET_FORECAST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response.data.msg,
    });
  }
};

export const get_forecast_gps = (lat, lon) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
  try {
    const res = await axios.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=db5e8b508dfc4076b97a67b5eece4f12`
    );
    console.log(res.data);
    dispatch({
      type: GET_FORECAST,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: ERROR_MESSAGE,
      payload: err.response.data.msg,
    });
  }
};
