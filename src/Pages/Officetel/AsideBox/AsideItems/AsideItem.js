import React, { useState } from "react";

const AsideItem = ({ setListClick, setListData, location, room }) => {
  const getDetailData = async () => {
    const data = await fetch(
      `http://10.58.3.234:8001/studio-flat/item/${room.registrationNum}`
      // "http://localhost:3000/data/detailData.json"
    );
    const dataJSON = await data.json();
    setListData(dataJSON);
  };
  return (
    <li
      className="aside-item"
      onClick={() => {
        setListClick(true);
        getDetailData();
      }}
    >
      <div
        className="item-img"
        style={{
          backgroundImage: `url(${room.thumbnailImg}?w=400&h=300&q=70&a=1)`,
        }}
      ></div>
      <div className="item-text">
        <div className="room-type">
          <div
            className="room-recommend-icon"
            style={room.recommend ? { dispaly: "inline" } : { display: "none" }}
          >
            추천
          </div>
          오피스텔 ・ {room.subRoomType}
        </div>
        <div className="room-price">
          {console.log(parseInt(room.deposit.slice(0, -5)))}
          {room.monthlyRent
            ? "월세 " +
              parseInt(room.deposit).toLocaleString() +
              "/" +
              parseInt(room.monthlyRent)
            : room.deposit >= 10000 &&
              parseInt(room.deposit.slice(-7, -1)) != "0000"
            ? "전세 " +
              room.deposit.slice(0, -7) +
              "억 " +
              parseInt(room.deposit.slice(-7, -1)).toLocaleString()
            : parseInt(room.deposit.slice(-7, -1)) == "0000"
            ? "전세 " + parseInt(room.deposit.slice(0, -7)) + "억"
            : "전세 " + parseInt(room.deposit).toLocaleString()}
        </div>
        <div className="room-size">
          {room.supplyAreaP}평 ･ {room.floor}층/
          {room.entireFloor}층
        </div>
        <div className="room-address">
          {room.district + " " + room.province}
        </div>
        <div className="room-description">{room.description}</div>
      </div>
    </li>
  );
};

export default AsideItem;
