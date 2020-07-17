const createMarker = (LocationArr, map) => {
  const { kakao } = window;
  const extractArr = [];

  var markerImage = new kakao.maps.MarkerImage(
    "https://apis.zigbang.com/marker/v5/officetel?type=none&dpi=320",
    new kakao.maps.Size(39, 49),
    new kakao.maps.Point(-10, 49)
  );
  LocationArr.map((location, idx) => {
    extractArr.push(
      new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(location.latitude, location.longitude),
        image: markerImage,
      })
    );
    kakao.maps.event.addListener(extractArr[idx], "click", function () {
      map.panTo(extractArr[idx].getPosition()); //클릭시 해당 마커의 좌표를 센터로 부드럽게 이동
    });
  });
  return extractArr;
};

export default createMarker;
