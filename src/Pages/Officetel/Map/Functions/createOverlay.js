const createOverlay = (LocationArr, map) => {
  const { kakao } = window;
  const overlayExtractArr = [];
  LocationArr.map((_, i) => {
    overlayExtractArr.push(
      new kakao.maps.CustomOverlay({
        map: map,
        clickable: true,
        content: `<div class="customOverlay" style="position:relative; user-select:none; padding:1px 4px; line-height: 14px; left: 25px; text-align:center; background-color:rgba(96,96,96,0.8); color:#FEFEFE; font-size:10px; bottom:-20px;">${LocationArr[i].name}</div>`,
        position: new kakao.maps.LatLng(LocationArr[i].lat, LocationArr[i].lng),
        xAnchor: 0.5,
        yAnchor: 1,
        zIndex: 3,
      })
    );
  });
  return overlayExtractArr;
};

export default createOverlay;
