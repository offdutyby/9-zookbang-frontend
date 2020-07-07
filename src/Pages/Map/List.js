import React from "react";

export default function List(props) {
  const { searchList } = props;

  return (
    <aside
      style={{
        position: "absolute",
        width: "400px",
        height: "100px",
        fontSize: "14px",
        right: "2px",
        top: "30px",
      }}
    >
      {searchList.length &&
        searchList.map((x) => {
          return <div>{x["name"]}</div>;
        })}
    </aside>
  );
}
