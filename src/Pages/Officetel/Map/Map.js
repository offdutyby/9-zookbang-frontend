import React, { useState, useEffect } from "react";
import createSubwayMarker from "./Functions/createSubwayMarker";
import createSchoolMarker from "./Functions/createSchoolMarker";

const Map = ({ inputValue, setSearchList }) => {
  const [map, setMap] = useState(null);
  const [LocationArr, setLocationArr] = useState([]);
  const [subwayArr, setSubwayArr] = useState([]);
  const [schoolArr, setSchoolArr] = useState([]);
  const [num, setNum] = useState(1);
  const [markerArr, setMarkerArr] = useState([]);
  const [clustererObj, setClustererObj] = useState({});

  //위치불러오기 함수
  const getLocation = async (num) => {
    const data = await fetch(`http://localhost:3000/data/mapData${num}.json`);
    const dataJSON = await data.json();
    setLocationArr(dataJSON.filtered);
    setSearchList(dataJSON.filtered); //리스트로 보내줄 데이터
  };

  const getSubway = async () => {
    const data = await fetch("http://localhost:3000/data/subwayData.json");
    const dataJSON = await data.json();
    setSubwayArr(dataJSON.subway);
  };

  const getSchool = async () => {
    const data = await fetch("http://localhost:3000/data/schoolData.json");
    const dataJSON = await data.json();
    setSchoolArr(dataJSON.school);
  };

  const createMap = () => {
    //맵 생성 함수
    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&autoload=false&libraries=clusterer";
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        const container = document.getElementById("map"); //맵을 id가 map인 곳에 보여줍니다.
        const options = {
          center: new kakao.maps.LatLng(37.552672831662136, 127.06917351503958), //센터 좌표
          level: 4, //줌 레벨
        };
        const Map = new kakao.maps.Map(container, options); //맵 생성
        setMap(Map);

        kakao.maps.event.addListener(Map, "idle", function () {});
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
    createCluster(extractArr);
  };

  const createCluster = (markerArr) => {
    const { kakao } = window;
    const clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
    });
    clusterer.addMarkers(markerArr);
    setClustererObj(clusterer);
  };

  //컴디마일 때와 비슷
  useEffect(() => {
    getSubway();
    getSchool();
    getLocation(num);
    createMap();
  }, []);

  //검색어 받고 맵과 마커 설정
  useEffect(() => {
    markerArr.map((marker) => {
      return marker.setMap(null);
    });
    inputValue && clustererObj.clear();
    getLocation(inputValue);
  }, [inputValue]); //인풋값 바뀌면

  //컴디업과 비슷
  useEffect(() => {
    if (map && LocationArr.length) {
      createMarker();
      createSchoolMarker(schoolArr, map);
      createSubwayMarker(subwayArr, map);
    }
  }, [map, LocationArr]); //맵과 지역데이터가 받아지면

  return (
    <>
      <div
        id="map"
        style={{
          width: "calc(100% - 400px",
          height: "calc(100% - 122px)",
          position: "absolute",
          bottom: "0",
        }}
      ></div>
    </>
  );
};

export default Map;
