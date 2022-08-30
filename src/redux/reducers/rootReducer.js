import {
  ERROR_MESSAGE,
  GET_CITIES,
  RESET,
  GET_CURRENT_WEATHER,
  SET_LOADING,
  GET_FORECAST,
} from "../types";

const initState = {
  weather: {},
  cities: [],
  forecast: [],
  error: null,
  loading: false,
};

const reducer = (state = initState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case GET_CITIES:
      console.log(typeof payload.data);
      return {
        ...state,
        cities: payload.data,
        error: null,
        loading: false,
      };
    case ERROR_MESSAGE: {
      return {
        ...state,
        cities: [],
        error: payload,
        loading: false,
      };
    }
    case GET_CURRENT_WEATHER: {
      return {
        ...state,
        error: null,
        weather: payload,
        loading: false,
      };
    }
    case GET_FORECAST: {
      return {
        ...state,
        error: null,
        forecast: payload.data.slice(1, 6),
        loading: false,
      };
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case RESET: {
      return {
        ...state,
        cities: [],
        error: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;
