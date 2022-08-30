import React, { useState, useEffect, useMemo, useCallback } from "react";
import useStateManager from "react-select";
import Select from "react-select";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { CgClose } from "react-icons/cg";
import { get_cities, get_current_weather } from "../redux/actions/action";
import Spinner from "../components/Spinner";

const SearchPanel = ({ closeSearch, search }) => {
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
    setCity("");
  };

  const getCurrentWeather = useCallback((currentCity) => {
    dispatch(get_current_weather(currentCity));
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
    <div
    /* className={
        !search
          ? "searchPanel searchPanel-hidden"
          : "searchPanel searchPanel-active"
      } */
    >
      <div className="closeSearch">
        <CgClose onClick={closeSearch} className="closeSearchIcon" />
      </div>
      <div>
        <form className="inputForm" onSubmit={getCities}>
          <input
            type="text"
            className="searchInput"
            placeholder="Enter Country"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <button
            className="searchButton"
            style={{ width: "100px", color: "white", background: "#3C47E9" }}
          >
            Get Cities
          </button>
        </form>
        {cities && cities.length !== 0 && (
          <form className="citySelect">
            <Select
              id="cities"
              name="cities"
              label="cities"
              options={updatedCities}
              value={city}
              placeholder="Select City"
              onChange={(value) => {
                setCity(value);
                getCurrentWeather(value.value);
              }}
              theme={(theme) => ({
                ...theme,
                borderRadius: "5px",
                padding: "10px",
                colors: {
                  ...theme.colors,
                  primary25: "#53687E",
                  primary: "#90A3B6",
                },
                controlHeight: 38,
              })}
            />
          </form>
        )}
      </div>
    </div>
  );
};

export default SearchPanel;
