const createOverlay = (LocationArr, map) => {
  const { kakao } = window;
  const overlayExtractArr = [];
  LocationArr.map((_, i) => {
    overlayExtractArr.push(
      new kakao.maps.CustomOverlay({
        map: map,
        clickable: true,
        content: `<div style="position:relative; top:10px;  user-select:none; padding:1px 4px; text-align:center;  background-color:rgba(96,96,96,0.8); color:#FEFEFE; font-size:10px;">${LocationArr[i].complexName}</div>`,
        position: new kakao.maps.LatLng(LocationArr[i].latitude, LocationArr[i].longitude),
      })
    );
    overlayExtractArr.push(
      new kakao.maps.CustomOverlay({
        map: map,
        clickable: true,
        content: `<div style="color: white; background-color: rgb(74, 66, 59); font-weight:bold; font-size: 12px; text-align: center; width:26px; height:17px; padding-top:4px; border-radius:40%; position:relative; left:15px; top: -8px;">${LocationArr[i].roomFilter.length}</div>`,
        position: new kakao.maps.LatLng(LocationArr[i].latitude, LocationArr[i].longitude),
      })
    );
  });
  return overlayExtractArr;
};

export default createOverlay;


