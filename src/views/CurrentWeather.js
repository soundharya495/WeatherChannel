import { flexbox } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const CurrentWeather = ({ openSearch }) => {
  const { weather } = useSelector((state) => state);

  console.log(weather);

  //useEffect(() => {}, [weather]);
  return (
    <div className="currentLayout">
      <button className="searchButton" onClick={openSearch}>
        Search for Location
      </button>
      <div className="cloudBox">
        <img
          src={weather && weather.current.condition.icon}
          alt="Shower"
          style={{
            width: "200px",
            // height: "300px",
          }}
        />
      </div>
      {weather && weather !== null && (
        <div className="currentData">
          {" "}
          <h1 style={{ fontSize: "54px" }}>
            {weather.current.temp_c} <span>℃</span>
          </h1>
          <h2 style={{ marginTop: "30px" }}>
            {weather && weather.current.condition.text}
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
              {moment(weather && weather.location.localtime).format(
                "ddd D MMMM "
              )}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
