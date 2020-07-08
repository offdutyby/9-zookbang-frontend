const createSubwayMarker = (subwayArr, map) => {
  const { kakao } = window;
  const subwayImg = new kakao.maps.MarkerImage(
    "https://apis.zigbang.com/marker/v5/subway_item?select=n&dpi=320",
    new kakao.maps.Size(31, 35)
  );
  subwayArr.map((subway) => {
    new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(subway["lat"], subway["lng"]),
    }).setImage(subwayImg);
  });
};

export default createSubwayMarker;
