import React, { useState } from "react";
import styled from "styled-components";

const MaintenanceInfo = ({ listData }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <MaintenanceInformation toggle={toggle}>
      <div className="maintenance-info-top" onClick={() => setToggle(!toggle)}>
        <div className="maintenance-info-top-text">
          <div className="maintenance-info-top-title">관리비 포함 항목</div>
          <div className="maintenance-info-top-fee">관리비 : 15만원</div>
        </div>
        <div className="maintenance-info-top-toggle" />
      </div>
      <div
        className="maintenance-info-dropdown"
        style={
          listData.roomDetail &&
          listData.roomDetail[0].maintenanceOption.length === 0
            ? { padding: "0px" }
            : { padding: "25px 9px 0px" }
        }
      >
        <ul className="option-list">
          {listData.roomDetail &&
            (listData.roomDetail[0].maintenanceOption.length === 0 ? (
              <div className="option-null">
                <div>관리비에 포함된 항목이 없습니다</div>
              </div>
            ) : (
              listData.roomDetail[0].maintenanceOption.map((option) => {
                return (
                  <li className="option-item">
                    <div
                      className="option-item-img"
                      style={{ backgroundImage: `url(${option.iconImg})` }}
                    />
                    <div className="option-item-text">{option.optionName}</div>
                  </li>
                );
              })
            ))}
        </ul>
      </div>
    </MaintenanceInformation>
  );
};

export default MaintenanceInfo;

const MaintenanceInformation = styled.div`
  background-color: white;
  .maintenance-info-top {
    margin-top: 10px;
    padding: 16px 13px;
    position: relative;
    cursor: pointer;

    &-text {
      font-size: 18px;
      color: #222222;
      display: inline-block;
    }
    &-title {
      font-size: 18px;
      line-height: 28px;
    }
    &-fee {
      line-height: 28px;
      font-size: 14px;
      color: #757575;
    }
    &-toggle {
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_btn_arrow_open_24x24_nor_black-ca11bea3d2109bf00c76786fb2ae424e.png");
      background-size: cover;
      width: 24px;
      height: 24px;
      position: absolute;
      right: 13px;
      top: 30px;
      transform: translateY(-50%);
      display: inline-block;
      transform: ${(props) =>
        props.toggle ? "rotate(180deg)" : "rotate(0deg)"};
      transition: 0.5s;
    }
  }
  .maintenance-info-dropdown {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    display: ${(props) => (props.toggle ? "block" : "none")};
    .option-list {
      display: flex;
      flex-wrap: wrap;
      .option-null {
        width: 100%;
        height: 80px;
        font-size: 16px;
        display: flex;
        align-items: center;
        position: relative;
        div {
          margin: 0 auto;
        }
      }
      .option-item {
        flex-basis: 25%;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding-bottom: 30px;
        &-img {
          background-image: url("https://s.zigbang.com/zuix/ic_aircon_dim_cutline.png");
          background-size: cover;
          width: 36px;
          height: 36px;
        }
        &-text {
          line-height: 19px;
          color: #757575;
          font-size: 13px;
          margin: 2px 4px 0;
        }
      }
    }
  }
`;
