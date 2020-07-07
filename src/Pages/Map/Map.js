import React, { useState, useEffect } from "react";

const Map = (props) => {
  const [map, setMap] = useState(null);
  const [LocationArr, setLocationArr] = useState([]);
  const [num, setNum] = useState(1);
  const [markerArr, setMarkerArr] = useState([]);

  const { inputValue } = props;

  const getLocation = async (num) => {
    //위치불러오기 함수
    const data = await fetch(`http://localhost:3000/data${num}.json`);
    const dataJSON = await data.json();
    setLocationArr(dataJSON.filtered);
  };

  const createMap = () => {
    //맵 생성 함수
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&autoload=false";
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        const container = document.getElementById("map"); //맵을 id가 map인 곳에 보여줍니다.
        const options = {
          center: new kakao.maps.LatLng(37.552672831662136, 127.06917351503958), //센터 좌표
          level: 3, //줌 레벨
        };
        const Map = new kakao.maps.Map(container, options); //맵 생성
        setMap(Map);

        kakao.maps.event.addListener(Map, "idle", function () {
          console.log("hi");
        });
      });
    };
  };

  const createMarker = () => {
    const { kakao } = window;
    let extractArr = [];
    LocationArr.map((_, i) => {
      extractArr.push(
        new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(
            LocationArr[i].lat,
            LocationArr[i].lng
          ),
        })
      );
    });
    setMarkerArr(extractArr);
    console.log("HIHIHIHI");
  };

  useEffect(() => {
    //컴디마일 때와 비슷
    getLocation(num);
    createMap();
  }, []);

  useEffect(() => {
    //컴디업과 비슷
    map && LocationArr && createMarker();
  }, [map, LocationArr]);

  useEffect(() => {
    createMap();
    createMarker();
    getLocation(inputValue);
  }, [inputValue]);

  return (
    <>
      <div id="map" style={{ width: "70%", height: "80vh" }}></div>
    </>
  );
};

export default Map;
