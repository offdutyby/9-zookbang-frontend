import React, { useState } from "react";
import styled from "styled-components";

const DetailInfo = ({ listData }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <DetailInformation toggle={toggle}>
      <div className="detail-info-top" onClick={() => setToggle(!toggle)}>
        <div className="detail-info-top-title">매물 정보</div>
        <div className="detail-info-top-toggle" />
      </div>
      <div className="detail-info-dropdown">
        <div className="detail-info-dropdown-item">
          <div className="info-name">주소</div>
          <div className="info-value">
            {listData.roomDetail && listData.roomDetail[0].district}{" "}
            {listData.roomDetail && listData.roomDetail[0].province}
          </div>
        </div>
        <div className="detail-info-dropdown-item">
          <div className="info-name">층/건물층수</div>
          <div className="info-value">
            {listData.roomDetail && listData.roomDetail[0].floor}
            {"/"}
            {listData.roomDetail && listData.roomDetail[0].entireFloor}
          </div>
        </div>
        <div className="detail-info-dropdown-item">
          <div className="info-name">면적(전용)</div>
          <div className="info-value">
            {" "}
            {listData.roomDetail && listData.roomDetail[0].exclusiveAreaP}
          </div>
        </div>
        <div className="detail-info-dropdown-item">
          <div className="info-name">구조</div>
          <div className="info-value">
            {" "}
            {listData.roomDetail && listData.roomDetail[0].subRoomType}
          </div>
        </div>
        <div className="detail-info-dropdown-item">
          <div className="info-name">주차</div>
          <div className="info-value">
            {" "}
            {listData.roomDetail && listData.roomDetail[0].isParkingLot
              ? "가능"
              : "불가능"}
          </div>
        </div>
        <div className="detail-info-dropdown-item">
          <div className="info-name">엘리베이터</div>
          <div className="info-value">
            {" "}
            {listData.roomDetail && listData.roomDetail[0].isElevator
              ? "있음"
              : "없음"}
          </div>
        </div>
        <div className="detail-info-dropdown-item">
          <div className="info-name">입주가능일</div>
          <div className="info-value">
            {listData.roomDetail && listData.roomDetail[0].moveInDate}
          </div>
        </div>
      </div>
    </DetailInformation>
  );
};

export default DetailInfo;

const DetailInformation = styled.div`
  background-color: white;

  .detail-info-top {
    cursor: pointer;
    margin-top: 10px;
    padding: 16px 13px;
    position: relative;
    &-title {
      font-size: 18px;
      line-height: 28px;
      color: #222222;
      display: inline-block;
    }
    &-toggle {
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_btn_arrow_open_24x24_nor_black-ca11bea3d2109bf00c76786fb2ae424e.png");
      background-size: cover;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 13px;
      display: inline-block;
      transform: ${(props) =>
        props.toggle ? "rotate(180deg)" : "rotate(0deg)"};
      transition: 0.5s;
    }
  }
  .detail-info-dropdown {
    display: ${(props) => (props.toggle ? "block" : "none")};
    &-item {
      padding: 11px 9px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      .info-name {
        width: 130px;
        font-size: 14px;
        line-height: 21px;
        color: #a6a6a6;
        padding: 0 4px;
      }
      .info-value {
        font-size: 14px;
        line-height: 21px;
        color: #222222;
      }
    }
  }
`;
