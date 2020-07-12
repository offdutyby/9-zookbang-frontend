import React from "react";
import styled from "styled-components";
const ZoomInImg =
  "https://s.zigbang.com/zigbang-www/_next/static/btn_content_map_zoomin_48x48_nor-f43cb307deaf3370ab8b1d62222dd568.png";
const ZoomOutImg =
  "https://s.zigbang.com/zigbang-www/_next/static/btn_content_map_zoomout_48x48_nor-4ba044d7c426f12417aa328b409e3e50.png";

const ZoomController = ({ map }) => {
  return (
    <div
      className="map-zoom-controller"
      style={{
        position: "fixed",
        left: "20px",
        top: "50%",
        zIndex: "10",
      }}
    >
      {Array(2)
        .fill()
        .map((_, i) => (
          <Controller
            zoom={i}
            onClick={() => {
              map.setLevel(map.getLevel() + (2 * i - 1), { animate: true });
            }}
          />
        ))}
    </div>
  );
};

export default ZoomController;

const Controller = styled.button`
  width: 40px;
  height: 40px;
  display: block;
  padding: 0;
  outline: none;
  border: none;
  border-radius: 2px;
  background-image: url(${({ zoom }) => (zoom === 0 ? ZoomInImg : ZoomOutImg)});
  background-size: 48px;
  background-position: ${({ zoom }) =>
    zoom === 0 ? "-3.5px bottom" : "-3.5px .5px"};
  cursor: pointer;
`;
