import React, { useState } from "react";
import Map from "./Map";
import List from "./List";

export default function Mapwrap() {
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
      <input onChange={searchValue}></input>
      <button onClick={searchClick} type="button">
        검색
      </button>
      <Map
        inputValue={clickSearch}
        setSearchList={(inp) => setSearchList(inp)}
      />
      <List searchList={searchList} />
    </div>
  );
}
