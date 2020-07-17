import React, { useState } from "react";
import styled from "styled-components";

const NearSubwayInfo = ({ listData }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <NearSubwayInformation toggle={toggle}>
      <div className="NearSubway-info-top" onClick={() => setToggle(!toggle)}>
        <div className="NearSubway-info-top-title">인근 전철역</div>
        <div className="NearSubway-info-top-toggle" />
      </div>
      <div className="NearSubway-info-dropdown">
        <div>
          {listData.roomDetail && listData.roomDetail[0].subway.join(", ")}
        </div>
      </div>
    </NearSubwayInformation>
  );
};

export default NearSubwayInfo;

const NearSubwayInformation = styled.div`
  background-color: white;
  .NearSubway-info-top {
    margin-top: 10px;
    padding: 16px 13px;
    position: relative;
    cursor: pointer;

    &-title {
      font-size: 18px;
      line-height: 28px;
    }
    &-toggle {
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_btn_arrow_open_24x24_nor_black-ca11bea3d2109bf00c76786fb2ae424e.png");
      background-size: cover;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 13px;
      top: 17px;
      transform: translateY(-50%);
      display: inline-block;
      transform: ${(props) =>
        props.toggle ? "rotate(180deg)" : "rotate(0deg)"};
      transition: 0.5s;
    }
  }
  .NearSubway-info-dropdown {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px 13px 17px;
    display: ${(props) => (props.toggle ? "block" : "none")};
    div {
      line-height: 19px;
      color: #757575;
      font-size: 16px;
      margin: 2px 4px 0;
    }
  }
`;
