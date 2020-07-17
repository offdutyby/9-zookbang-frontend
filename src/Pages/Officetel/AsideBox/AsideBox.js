import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AsideItem from "./AsideItems";
import AsideDetail from "./AsideDetail";

const AsideBox = ({ LocationArr }) => {
  const [getArray, setGetArray] = useState([]);
  const [listData, setListData] = useState([]);
  const [countArray, setCountArray] = useState([]);
  const [listClick, setListClick] = useState(false);
  const countFunc = (item) => {
    let count = 0;
    item.map((location) => {
      count += +location.roomFilter.length;
    });
    return count;
  };

  useEffect(() => {
    setGetArray(LocationArr);
    setCountArray(countFunc(LocationArr));
  }, [LocationArr]);

  return (
    <Aside show={listClick}>
      <div className="aside-list-count">
        <div className="aside-list-count-text">
          <img
            src="https://s.zigbang.com/zigbang-www/_next/static/ic_actionbar_back_30x30_nor_black-43d95223e94f50b232d487e63c53d523.png"
            width="30"
            height="30"
            onClick={() => setListClick(false)}
          />
          지역 목록
          {countArray ? " " + countArray + "개" : ""}
        </div>
        <div className="aside-list-change-unit"></div>
      </div>
      <div className="aside-list-box">
        <div className="recommend-box">
          <div className="recommend-title">이 지역 안심중개사 추천 매물</div>
          <div className="recommend-info" />
        </div>
        <ul className="aside-list">
          {getArray.length > 0 &&
            getArray.map((location) => {
              return location.roomFilter.map((room) => {
                return (
                  <AsideItem
                    setListClick={setListClick}
                    setListData={setListData}
                    location={location}
                    room={room}
                  />
                );
              });
            })}
        </ul>
      </div>
      <AsideDetail listData={listData} listClick={listClick} />
    </Aside>
  );
};

export default AsideBox;

const Aside = styled.aside`
  position: absolute;
  height: calc(100% - 122px);
  font-size: 14px;
  border-left: 1px solid rgb(225, 225, 225);
  right: 0;
  bottom: 0;

  .aside-list-count {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    height: 56px;
    padding: 0 10px 0 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    position: relative;

    &-text {
      font-size: 18px;
      color: #222222;
      margin-left: ${(props) => (props.show ? "30px" : "7px")};
      margin-top: 2px;
      img {
        position: absolute;
        left: 10px;
        top: 50%;
        cursor: pointer;
        transform: translateY(-50%);
        display: ${(props) => (props.show ? "inline-block" : "none")};
      }
    }
    .aside-list-change-unit {
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_unit_change_30x30_nor_black-73e7307155b061dbcf282718af48cd5d.png");
      background-size: cover;
      width: 30px;
      height: 30px;
      cursor: pointer;
    }
  }
  .aside-list-box {
    overflow: auto;
    display: ${(props) => (props.show ? "none" : "block")};
    height: calc(100% - 56px);
    .recommend-box {
      display: flex;
      justify-content: space-between;
      padding: 20px 13px;
      .recommend-title {
        font-size: 14px;
        line-height: 21px;
        color: #222222;
      }
      .recommend-info {
        background-image: url("https://s.zigbang.com/zigbang-www/_next/static/ic_btn_question_18x18_nor_black-6348238dd4a72b7925b666044a7d411b.png");
        background-size: cover;
        width: 18px;
        height: 18px;
        cursor: pointer;
      }
    }
    .aside-list {
      .aside-item {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
        .item-img {
          background-image: url("https://ic.zigbang.com/ic/items/22415261/1.jpg?w=400&h=300&q=70&a=1");
          background-size: cover;
          width: 145px;
          height: 112px;
        }
        .item-text {
          width: 210px;
          height: 112px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .room-type {
            font-size: 9px;
            line-height: 12px;
            color: #757575;
            font-weight: bold;
            margin-bottom: 2px;

            .room-recommend-icon {
              background-color: rgba(15, 157, 154, 0.1);
              margin-right: 5px;
              min-width: 25px;
              padding-left: 4px;
              padding-right: 4px;
              padding-top: 1px;
              color: rgb(15, 157, 154);
              font-size: 9px;
              line-height: 12px;
              font-weight: bold;
              display: inline;
              border-radius: 2px;
            }
          }
          .room-price {
            font-size: 18px;
            line-height: 28px;
            font-weight: bold;
          }
          .room-size {
            line-height: 21px;
            font-size: 14px;
          }
          .room-address {
            line-height: 21px;
            font-size: 14px;
          }
          .room-description {
            font-size: 14px;
            line-height: 21px;
            color: #757575;
            text-overflow: ellipsis;
            overflow-x: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
`;
