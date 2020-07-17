import React, { useState, useEffect , memo} from "react";
import styled from "styled-components";
import createSubwayMarker from "./Functions/createSubwayMarker";
import createSchoolMarker from "./Functions/createSchoolMarker";
import ZoomController from "./ZoomController";
import createOverlay from "./Functions/createOverlay";
import createCluster from "./Functions/createCluster";
import createMarker from "./Functions/createMarker";
import {API_URL} from "../../../config";

const Map = memo(({ inputValue, setSearchList }) => {
  const [map, setMap] = useState(null);
  const [LocationArr, setLocationArr] = useState([]);
  const [subwayArr, setSubwayArr] = useState([]);
  const [schoolArr, setSchoolArr] = useState([]);
  const [num, setNum] = useState(1);
  const [markerArr, setMarkerArr] = useState([]);
  const [clustererObj, setClustererObj] = useState({});


  //위치불러오기 함수
  const getLocation = async (lng, lat) => {
    const data = await fetch(
      `${API_URL}/studio-flat/map?longitude=${lat}&latitude=${lng}`
    );
    const dataJSON = await data.json();
    setLocationArr(dataJSON.result);
    setSearchList(dataJSON.result); //리스트로 보내줄 데이터
  };

  const getPublic = async () => {
    const subwayData = await fetch('http://localhost:3000/data/subwayData.json');
    const subwayDataJSON = await subwayData.json();
    setSubwayArr(subwayDataJSON.subway);
    const schoolData = await fetch('http://localhost:3000/data/schoolData.json');
    const schoolDataJSON = await schoolData.json();
    setSchoolArr(schoolDataJSON.school);
  };

  const createMap = () => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=76a449f1dae5315175afe4994035d80d&autoload=false&libraries=clusterer';
    document.head.appendChild(script);
    script.onload = () => {
      const { kakao } = window;
      kakao.maps.load(() => {
        const container = window.document.getElementById('map'); //맵을 id가 map인 곳에 보여줍니다.
        const options = {
          center: new kakao.maps.LatLng(37.512672831662136, 127.06917351503958), //센터 좌표
          level: 4, //줌 레벨
        };
        const Map = new kakao.maps.Map(container, options); //맵 생성
        setMap(Map);
        kakao.maps.event.addListener(Map, "idle", function () {
          markerArr.map((marker) => {
            return marker.setMap(null);
          });
          getLocation(Map.getCenter().Ha, Map.getCenter().Ga);
        });
      });
    };
  };

  const createMarkers = () => {
    const extractArr = createMarker(LocationArr, map);
    setMarkerArr(extractArr);
    createClusterers(extractArr);
    // createCustomOverlay();
  };

  const createClusterers = (markerArr) => {
    setClustererObj(createCluster(markerArr, map));
  };

  // const createCustomOverlay = () => {
  //   setOverlayArr(createOverlay(LocationArr, map));
  // };

  //컴디마일 때와 비슷
  useEffect(() => {
    getPublic();
    createMap();
  }, []);

  //검색어 받고 맵과 마커 설정
  useEffect(() => {
    markerArr.map((marker) => {
      return marker.setMap(null);
    });
    inputValue && clustererObj.clear();
  }, [inputValue]); //인풋값 바뀌면

  //컴디업과 비슷
  useEffect(() => {
    if (map && LocationArr.length > 0) {
      createMarkers();
      createSchoolMarker(schoolArr, map);
      createSubwayMarker(subwayArr, map);
    }
  }, [map, LocationArr]); //맵과 지역데이터가 받아지면
  
  

  return (
    <>
      <ZoomController map={map} />
      <KakaoMap id="map" />
    </>
  );
});

export default Map;

const KakaoMap = styled.div`
  width: calc(100% - 400px);
  height: calc(100% - 122px);
  position: absolute;
  bottom: 0;
`;

