const createMarker = (LocationArr, map) => {
  const { kakao } = window;
  const extractArr = [];

  const markerImage = new kakao.maps.MarkerImage(
    "https://apis.zigbang.com/marker/v5/officetel?type=normal&dpi=320",
    new kakao.maps.Size(39, 49)
  );
  LocationArr.map((location, idx) => {
    extractArr.push(
      new kakao.maps.Marker({
        map: map,
        zIndex: 0,
        position: new kakao.maps.LatLng(location.latitude, location.longitude),
        image: markerImage,
      })
      // new kakao.maps.CustomOverlay({
      //   map: map,
      //   clickable: true,
      //   content: `<div style="position:relative; top:10px;  user-select:none; padding:1px 4px; text-align:center;  background-color:rgba(96,96,96,0.8); color:#FEFEFE; font-size:10px;">${LocationArr[idx].complexName}</div>`,
      //   position: new kakao.maps.LatLng(location.latitude,
      //     location.longitude),
      // }),
      // new kakao.maps.CustomOverlay({
      //   map: map,
      //   clickable: true,
      //   content: `<div style="color: white; background-color: rgb(74, 66, 59); font-weight:bold; font-size: 12px; text-align: center; width:26px; height:17px; padding-top:4px; border-radius:40%; position:relative; left:15px; top: -8px;">${LocationArr[idx].roomFilter.length}</div>`,
      //   position: new kakao.maps.LatLng(location.latitude,
      //     location.longitude),
      // })
    );
    kakao.maps.event.addListener(extractArr[idx], "click", function () {
      map.panTo(extractArr[idx].getPosition()); //클릭시 해당 마커의 좌표를 센터로 부드럽게 이동
    });
  });
  return extractArr;
};

export default createMarker;
