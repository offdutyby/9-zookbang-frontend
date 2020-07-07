import React, { useState } from "react";
import Map from "./Map";
import List from "./List";

export default function Mapwrap() {
  const [input, setInput] = useState("");
  console.log(input);

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input}></input>
      <Map inputValue={input} />
      <List />
    </div>
  );
}
