import React, { useState } from "react";

import Map from "./Map";
import AsideBox from "../AsideBox";
import OfficetelNavBox from "../OfficetelNavBox";
import SearchBox from "../SearchBox";

const Mapwrap = () => {
  const [clickSearch, setClickSearch] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const searchClick = () => {
    setClickSearch(inputSearch);
  };

  const searchValue = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <OfficetelNavBox />
      <SearchBox searchClick={searchClick} searchValue={searchValue} />
      <Map
        inputValue={clickSearch}
        setSearchList={(inp) => setSearchList(inp)}
      />
      <AsideBox searchList={searchList} />
    </div>
  );
};

export default Mapwrap;
