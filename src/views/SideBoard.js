import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import SearchPanel from "./SearchPanel";

const SideBoard = () => {
  const [search, setSearch] = useState(false);
  return (
    <div className="sideLayout">
      {!search ? (
        <CurrentWeather openSearch={() => setSearch(true)} />
      ) : (
        <SearchPanel closeSearch={() => setSearch(false)} search={search} />
      )}
    </div>
  );
};

export default SideBoard;
