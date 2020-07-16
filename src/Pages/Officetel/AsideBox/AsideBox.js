import React from "react";
import styled from "styled-components";
import AsideItem from "./AsideItems";

const AsideBox = ({ searchList }) => {
  return (
    <Aside>
      <div className="aside-list-count">
        <div className="aside-list-count-text">지역 목록 305개</div>
        <div className="aside-list-change-unit"></div>
      </div>
      <div className="aside-list-box">
        <div className="recommend-box">
          <div className="recommend-title">이 지역 안심중개사 추천 매물</div>
          <div className="recommend-info" />
        </div>
        <ul className="aside-list">
          {/* {searchList.length > 0 &&
            searchList.map((room) => {
              return (
                <AsideItem
                  img={room.image}
                  type={room.real_type}
                  price={room.id}
                  size={room.floorArea.p}
                  address={room.sido}
                  description={room.name}
                />
              );
            })} */}
        </ul>
      </div>
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
    &-text {
      font-size: 18px;
      color: #222222;
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
