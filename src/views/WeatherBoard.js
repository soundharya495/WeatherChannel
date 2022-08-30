import React from "react";
import MainBoard from "./MainBoard";
import SideBoard from "./SideBoard";

const WeatherBoard = () => {
  return (
    <div className="appLayout">
      <SideBoard />
      <MainBoard />
    </div>
  );
};

export default WeatherBoard;
