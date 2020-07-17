import React, { useState, useEffect } from "react";
import styled from "styled-components";

const LocationInfo = ({ listData }) => {
  const [toggle, setToggle] = useState(true);
  const createRoadMap = (lng, lat) => {
    const { kakao } = window;
    const container = window.document.getElementById("roadMap"); //맵을 id가 map인 곳에 보여줍니다.
    const options = {
      center: new kakao.maps.LatLng(lat, lng), //센터 좌표
      level: 4, //
      draggable: false,
    };
    const map = new kakao.maps.Map(container, options); //맵 생성

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(lat, lng),
    });

    marker.setMap(map);
  };

  useEffect(() => {
    if (listData.roomDetail) {
      createRoadMap(
        listData.roomDetail[0].longitude,
        listData.roomDetail[0].latitude
      );
    }
  }, [listData]);

  return (
    <LocationInformation toggle={toggle}>
      <div className="Location-info-top" onClick={() => setToggle(!toggle)}>
        <div className="Location-info-top-title">교통 정보™</div>
        <div className="Location-info-top-toggle" />
      </div>
      <div className="Location-info-dropdown">
        <div className="Location-address">
          {listData.roomDetail && listData.roomDetail[0].district}{" "}
          {listData.roomDetail && listData.roomDetail[0].province}
        </div>
        <div id="roadMap" />
      </div>
    </LocationInformation>
  );
};

export default LocationInfo;

const LocationInformation = styled.div`
  background-color: white;
  .Location-info-top {
    margin-top: 10px;
    padding: 16px 13px;
    position: relative;
    cursor: pointer;
    &-title {
      font-size: 18px;
      line-height: 28px;
    }
    &-toggle {
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_btn_arrow_open_24x24_nor_black-ca11bea3d2109bf00c76786fb2ae424e.png");
      background-size: cover;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 13px;
      top: 17px;
      display: inline-block;
      transform: ${(props) =>
        props.toggle ? "rotate(180deg)" : "rotate(0deg)"};
      transition: 0.5s;
    }
  }
  .Location-info-dropdown {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 13px 17px;
    width: 100%;
    display: ${(props) => (props.toggle ? "block" : "none")};
    .Location-address {
      color: #757575;
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 10px;
    }
    #roadMap {
      width: 360px;
      height: 166px;
    }
  }
`;
