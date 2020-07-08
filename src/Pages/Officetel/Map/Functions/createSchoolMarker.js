const createSchoolMarker = (schoolArr, map) => {
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

export default createSchoolMarker;
