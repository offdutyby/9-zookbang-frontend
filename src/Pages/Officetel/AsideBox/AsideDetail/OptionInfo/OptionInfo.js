import React, { useState } from "react";
import styled from "styled-components";

export const OptionInfo = ({ listData }) => {
  const [toggle, setToggle] = useState(true);

  return (
    <OptionInformation toggle={toggle}>
      <div className="option-info-top" onClick={() => setToggle(!toggle)}>
        <div className="option-info-top-title">옵션 정보</div>
        <div className="option-info-top-toggle" />
      </div>
      <div className="option-info-dropdown">
        <ul className="option-list">
          {listData.roomDetail &&
            listData.roomDetail[0].roomOption.map((option) => {
              return (
                <li className="option-item">
                  <div
                    className="option-item-img"
                    style={{ backgroundImage: `url(${option.iconImg})` }}
                  />
                  <div className="option-item-text">{option.optionName}</div>
                </li>
              );
            })}
        </ul>
      </div>
    </OptionInformation>
  );
};

export default OptionInfo;

const OptionInformation = styled.div`
  background-color: white;

  .option-info-top {
    margin-top: 10px;
    padding: 16px 13px;
    position: relative;
    cursor: pointer;

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
  .option-info-dropdown {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 25px 9px 0px;
    display: ${(props) => (props.toggle ? "block" : "none")};
    .option-list {
      display: flex;
      flex-wrap: wrap;
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
