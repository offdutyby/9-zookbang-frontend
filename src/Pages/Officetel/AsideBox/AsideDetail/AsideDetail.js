import React, { useState } from "react";
import styled from "styled-components";
import DetailInfo from "./DetailInfo";
import OptionInfo from "./OptionInfo";
import MaintenanceInfo from "./MaintenanceInfo";
import NearSubwayInfo from "./NearSubwayInfo";
import DetailExplainInfo from "./DetailExplainInfo";
import LocationInfo from "./LocationInfo";
import AgencyComment from "./AgencyComment";

const AsideDetail = ({ listClick, listData }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [slidePage, setSlidePage] = useState(0);

  console.log(listData.roomDetail && listData.roomDetail[0]);
  return (
    <Detail
      show={listClick}
      mouseOver={mouseOver}
      slidePage={slidePage}
      pageIndex={listData.roomDetail && listData.roomDetail[0].roomImg.length}
    >
      <div
        className="aside-detail-slide"
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
      >
        <ul className="aside-detail-slide-list">
          {listData.roomDetail &&
            listData.roomDetail[0].roomImg.map((_, i) => {
              return (
                <li>
                  <img
                    src={`https://ic.zigbang.com/ic/items/${
                      listData.roomDetail[0].registrationNum
                    }/${i + 1}.jpg?w=800&h=600&q=70&a=1`}
                  ></img>
                </li>
              );
            })}
        </ul>
        <div className="slide-btns">
          <div
            className="slide-left"
            onClick={() => setSlidePage(slidePage === 0 ? 0 : slidePage - 1)}
          />
          <div
            className="slide-right"
            onClick={() =>
              setSlidePage(
                listData.roomDetail &&
                  listData.roomDetail[0].roomImg.length - 1 === slidePage
                  ? listData.roomDetail[0].roomImg.length - 1
                  : slidePage + 1
              )
            }
          />
        </div>
        <div className="slide-number-count">
          <div>
            {slidePage + 1}/
            {listData.roomDetail && listData.roomDetail[0].roomImg.length}
          </div>
        </div>
      </div>
      <div className="aside-detail-basic-info">
        <div className="basic-top">
          <div className="basic-deposit">
            {listData.roomDetail &&
              (listData.roomDetail[0].monthlyRent
                ? listData.roomDetail[0].tradeType +
                  " " +
                  listData.roomDetail[0].deposit +
                  "/" +
                  listData.roomDetail[0].monthlyRent
                : listData.roomDetail[0].tradeType +
                  " " +
                  listData.roomDetail[0].deposit)}
          </div>
          <div className="basic-registration-num">
            등록번호{" "}
            {listData.roomDetail && listData.roomDetail[0].registrationNum}
          </div>
        </div>
        <div className="basic-middle">
          <div className="basic-supply-area">
            <div className="basic-supply-area-top">면적(계약)</div>
            <div className="basic-supply-area-text">
              {listData.roomDetail && listData.roomDetail[0].supplyAreaP}
            </div>
          </div>
          <div className="basic-maintenance-fee">
            <div className="basic-maintenance-fee-top">관리비</div>
            <div className="basic-maintenance-fee-text">
              {listData.roomDetail && listData.roomDetail[0].maintenanceFee}만원
            </div>
          </div>
          <div className="basic-structure">
            <div className="basic-structure-top">구조</div>
            <div className="basic-structure-text">
              {listData.roomDetail && listData.roomDetail[0].subRoomType}
            </div>
          </div>
        </div>
        <div className="basic-bottom">
          <div className="basic-description">
            {listData.roomDetail && listData.roomDetail[0].description}
          </div>
        </div>
      </div>
      <DetailInfo listData={listData} />
      <OptionInfo listData={listData} />
      <MaintenanceInfo listData={listData} />
      <NearSubwayInfo listData={listData} />
      <DetailExplainInfo listData={listData} />
      <div className="complex-card">
        <div
          className="complex-card-img"
          style={{
            backgroundImage: `url(${
              listData.roomDetail && listData.roomDetail[0].complexThumbNail
            }})`,
          }}
        />
        <div className="complex-card-text">
          <div className="complex-card-text-name">
            {listData.roomDetail && listData.roomDetail[0].complexName}
          </div>
          <div className="complex-card-text-location">
            {listData.roomDetail && listData.roomDetail[0].district}{" "}
            {listData.roomDetail && listData.roomDetail[0].province}
            {" · "}
            {listData.roomDetail && listData.roomDetail[0].complexHouseHold}
          </div>
          <div className="complex-card-text-enter">
            {listData.roomDetail && listData.roomDetail[0].complexBuildDate}{" "}
            입주
          </div>
        </div>
      </div>
      <LocationInfo listData={listData} />
      <div className="agency-info">
        <div className="agency-img-wrap">
          <div className="agency-safe-img" />
          <div
            className="agency-img"
            style={
              listData.agencies && {
                backgroundImage: `url(${listData.agencies[0].agencyPhoto})`,
              }
            }
          ></div>
        </div>
        <div className="agency-text">
          {listData.agencies && listData.agencies[0].agencyName}
        </div>
      </div>
      <AgencyComment listData={listData} />
    </Detail>
  );
};

export default AsideDetail;

const Detail = styled.div`
  background-color: #eeeeee;
  overflow-y: auto;
  overflow-x: hidden;
  width: 400px;
  height: calc(100vh - 178px);
  display: ${(props) => (props.show ? "block" : "none")};
  .aside-detail-slide {
    width: 100%;
    height: 289px;
    position: relative;
    overflow: hidden;

    &-list {
      display: flex;
      width: ${(props) => props.pageIndex * 400}px;
      transform: translateX(
        ${(props) => (props.slidePage / props.pageIndex) * -100}%
      );
      transition: 0.3s;
      cursor: pointer;
      li {
        width: 400px;
        height: 289px;
        display: inline-block;
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
    .slide-btns {
      position: absolute;
      top: 0;
      width: 100%;
      height: 300px;
      display: ${(props) => (props.mouseOver ? "block" : "none")};
      .slide-left {
        background-image: url("https://s.zigbang.com/zigbang-www/_next/static/bt_image_left_arrow_50x315-9958b815401798d3c3daf7abee470203.png");
        width: 50px;
        height: 315px;
        background-size: cover;
        position: absolute;
        left: 0;
        cursor: pointer;
      }
      .slide-right {
        background-image: url("https://s.zigbang.com/zigbang-www/_next/static/bt_image_right_arrow_50x315-0ce0ce9ee82bb960ed0774bf42853903.png");
        width: 50px;
        height: 315px;
        background-size: cover;
        position: absolute;
        right: 0;
        cursor: pointer;
      }
    }
    .slide-number-count {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      height: 20px;
      padding-left: 10px;
      padding-right: 10px;
      background-color: rgba(0, 0, 0, 0.5);
      margin: auto;
      border-radius: 10px;
      display: flex;
      align-items: center;
      div {
        color: white;
        line-height: 18px;
        font-size: 12px;
        font-weight: normal;
      }
    }
  }
  .aside-detail-basic-info {
    background-color: white;
    .basic-top {
      padding: 12px 13px 15px 13px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      .basic-deposit {
        font-size: 23px;
        line-height: 36px;
        font-weight: bold;
        color: rgb(34, 34, 34);
      }
      .basic-registration-num {
        color: rgb(117, 117, 117);
        line-height: 21px;
        font-size: 14px;
      }
    }
    .basic-middle {
      padding: 0 13px 18px 5px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      .basic-supply-area {
        padding: 18px 0 0 8px;
        width: 35%;
        &-top {
          line-height: 18px;
          font-size: 12px;
          color: rgb(34, 34, 34);
        }
        &-text {
          color: rgb(45, 96, 163);
          font-size: 20px;
          line-height: 30px;
          font-weight: bold;
        }
      }
      .basic-maintenance-fee {
        padding: 18px 0 0 8px;
        width: 29%;
        &-top {
          line-height: 18px;
          font-size: 12px;
          color: rgb(34, 34, 34);
        }
        &-text {
          color: rgb(45, 96, 163);
          font-size: 20px;
          line-height: 30px;
          font-weight: bold;
        }
      }
      .basic-structure {
        padding: 18px 0 0 8px;
        width: 35%;
        &-top {
          line-height: 18px;
          font-size: 12px;
          color: rgb(34, 34, 34);
        }
        &-text {
          color: rgb(45, 96, 163);
          font-size: 20px;
          line-height: 30px;
          font-weight: bold;
        }
      }
    }
    .basic-bottom {
      padding: 15px 13px 17px;

      .basic-description {
        color: rgb(117, 117, 117);
        font-size: 16px;
        line-height: 24px;
      }
    }
  }
  .complex-card {
    padding: 13px;
    min-height: 50px;
    display: flex;
    margin-top: 10px;
    border-top: 0.5px solid rgba(0, 0, 0, 0.1);
    background-color: white;
    &-img {
      background-size: cover;
      width: 104px;
      height: 80px;
    }
    &-text {
      color: #222222;
      width: 242px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 15px;

      &-name {
        font-size: 16px;
        line-height: 24px;
        text-align: left;
        font-weight: bold;
      }
      &-location {
        font-size: 14px;
        line-height: 21px;
        margin-top: 1px;
      }
      &-enter {
        font-size: 14px;
        line-height: 21px;
        margin-top: 1px;
      }
    }
  }
  .agency-info {
    background-color: white;
    display: flex;
    padding: 13px;
    margin-top: 10px;
    .agency-img-wrap {
      position: relative;
      border-radius: 100%;
      overflow: hidden;
      width: 70px;
      height: 70px;

      .agency-safe-img {
        background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_content_logo_ansim_profile_80x20_nor_teal-0758c204770f479f5eb602cc2e1d518b.png");
        background-size: cover;
        position: absolute;
        width: 70px;
        height: 18px;
        bottom: 0;
      }
      .agency-img {
        width: 70px;
        height: 70px;
        background-size: cover;
        border-radius: 100%;
      }
    }
    .agency-text {
      color: #222222;
      font-size: 16px;
      font-weight: bold;
      margin-left: 20px;
      line-height: 70px;
    }
  }
`;
