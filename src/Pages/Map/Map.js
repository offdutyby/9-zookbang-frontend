import React, { useState, useEffect } from "react";

const Map = (props) => {
  const [map, setMap] = useState(null);
  const [LocationArr, setLocationArr] = useState([]);
  const [subwayArr, setSubwayArr] = useState([]);
  const [schoolArr, setSchoolArr] = useState([]);
  const [num, setNum] = useState(1);
  const [markerArr, setMarkerArr] = useState([]);

  const { inputValue, setSearchList } = props;

  const getLocation = async (num) => {
    //위치불러오기 함수
    const data = await fetch(`http://localhost:3000/data${num}.json`);
    const dataJSON = await data.json();
    setLocationArr(dataJSON.filtered);
    setSearchList(dataJSON.filtered); //리스트로 보내줄 데이터
  };
  const getSubway = async () => {
    const data = await fetch("http://localhost:3000/subway.json");
    const dataJSON = await data.json();
    setSubwayArr(dataJSON.subway);
  };
  const getSchool = async () => {
    const data = await fetch("http://localhost:3000/school.json");
    const dataJSON = await data.json();
    setSchoolArr(dataJSON.school);
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
          level: 4, //줌 레벨
        };
        const Map = new kakao.maps.Map(container, options); //맵 생성
        setMap(Map);

        kakao.maps.event.addListener(Map, "idle", function () {
          console.log("hi");
        });
      });
    };
  };

  const createSubwayMarker = () => {
    const { kakao } = window;
    const subwayImg = new kakao.maps.MarkerImage(
      "data:image/png;base64,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",
      new kakao.maps.Size(31, 35)
    );
    subwayArr.map((subway) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(subway["lat"], subway["lng"]),
      }).setImage(subwayImg);
    });
  };

  const createSchoolMarker = () => {
    const { kakao } = window;
    const elementaryImg = new kakao.maps.MarkerImage(
      "https://apis.zigbang.com/marker/v5/school_item?stage=elementary&select=y&dpi=320",
      new kakao.maps.Size(31, 35)
    );
    schoolArr.map((school) => {
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(school["lat"], school["lng"]),
      }).setImage(elementaryImg);
    });
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

  //컴디마일 때와 비슷
  useEffect(() => {
    getSubway();
    getSchool();
    getLocation(num);
    createMap();
  }, []);

  //검색어 받고 맵과 마커 설정
  useEffect(() => {
    markerArr.map((x) => {
      return x.setMap(null);
    });
    getLocation(inputValue);
  }, [inputValue]); //인풋값 바뀌면

  //컴디업과 비슷
  useEffect(() => {
    map && LocationArr && createMarker();
    map && LocationArr && createSchoolMarker();
    map && LocationArr && createSubwayMarker();
  }, [map, LocationArr]); //맵과 지역데이터가 받아지면

  return (
    <>
      <div id="map" style={{ width: "70%", height: "80vh" }}></div>
    </>
  );
};

export default Map;
