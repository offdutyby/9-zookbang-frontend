import React, { useState } from "react";
import styled from "styled-components";
import RangeSlider from "../RangeSlider";
import depositRangeText from "./depositRangeTextFunc";
import priceRangeText from "./priceRangeTextFunc";
import structureBtnFunc from "./structureBtnFunc";

const FilterDropDown = ({
  val,
  saleType,
  setSaleType,
  depositRange,
  setDepositRange,
  typeMouseDown,
  setTypeMouseDown,
  priceRange,
  setPriceRange,
  structureTypes,
  setStructureTypes,
  manageCost,
  setManageCost,
  parkingAllow,
  setParkingAllow,
  dropDownToggle,
  setDropDownToggle,
}) => {
  const [resetRange, setResetRange] = useState(true);
  return (
    <FilterDropdown typeChange={val === saleType} toggle={dropDownToggle}>
      <div className="dropdown-top">
        <div
          className="dropdown-top-close"
          onClick={() => setDropDownToggle(false)}
        ></div>
        <div className="dropdown-top-title">필터</div>
        <div
          className="dropdown-top-reset"
          onClick={() => {
            setDepositRange({ ...depositRange, [val]: [0, 30] });
            setPriceRange({ ...priceRange, [val]: [0, 18] });
            setStructureTypes({ ...structureTypes, [val]: ["전체"] });
            setManageCost({ ...manageCost, [val]: false });
            setParkingAllow({ ...ParkingAllow, [val]: false });
            setResetRange(!resetRange);
          }}
        >
          모두 초기화
        </div>
      </div>
      <div className="dropdown-list">
        <div className="sale-types-item">
          <div className="sale-types-title">거래 유형</div>
          <div className="sale-types-filter">{saleType}</div>
          <div className="sale-types-btn">
            <SaleTypeBtn
              mouseDown={typeMouseDown === "전체"}
              typeSelected={saleType === "전체"}
              onMouseDown={() => setTypeMouseDown("전체")}
              onMouseUp={() => setTypeMouseDown("")}
              onMouseLeave={() => setTypeMouseDown("")}
              onClick={() => {
                setSaleType("전체");
              }}
            >
              전체
            </SaleTypeBtn>
            <SaleTypeBtn
              mouseDown={typeMouseDown === "전세"}
              typeSelected={saleType === "전세"}
              onMouseDown={() => setTypeMouseDown("전세")}
              onMouseUp={() => setTypeMouseDown("")}
              onMouseLeave={() => setTypeMouseDown("")}
              onClick={() => {
                setSaleType("전세");
              }}
            >
              전세
            </SaleTypeBtn>
            <SaleTypeBtn
              mouseDown={typeMouseDown === "월세"}
              typeSelected={saleType === "월세"}
              onMouseDown={() => setTypeMouseDown("월세")}
              onMouseUp={() => setTypeMouseDown("")}
              onMouseLeave={() => setTypeMouseDown("")}
              onClick={() => {
                setSaleType("월세");
              }}
            >
              월세
            </SaleTypeBtn>
          </div>
        </div>
        <div className="deposit-range">
          <div className="deposit-title">
            {saleType === "전세" ? "전세금" : "보증금"}
          </div>
          <div className="deposit-filter">
            {depositRangeText(depositRange[val])}
          </div>
          <RangeSlider
            val={val}
            range={depositRange}
            max="30"
            setRange={setDepositRange}
            pointValue="최소5천만2.5억최대"
            resetRange={resetRange}
          />
        </div>
        <div
          className="price-range"
          style={val === "전세" ? { display: "none" } : { display: "block" }}
        >
          <div className="price-range-title">
            {`월세${manageCost[val] ? " + 관리비" : ""}`}
          </div>
          <div className="price-range-filter">
            {priceRangeText(priceRange[val])}
          </div>
          <RangeSlider
            val={val}
            range={priceRange}
            max="18"
            setRange={setPriceRange}
            pointValue="최소35만150만최대"
            resetRange={resetRange}
          />
          <MangeCost
            mouseDown={typeMouseDown === "관리비"}
            typeSelected={manageCost[val]}
            onMouseDown={() => setTypeMouseDown("관리비")}
            onMouseUp={() => setTypeMouseDown("")}
            onMouseLeave={() => setTypeMouseDown("")}
            onClick={() => {
              setManageCost({ ...manageCost, [val]: !manageCost[val] });
            }}
          >
            <div className="manage-cost-img" />
            <div className="manage-cost-text">관리비 포함하여 찾기</div>
          </MangeCost>
        </div>
        <div className="room-structure">
          <div className="room-structure-title">구조</div>
          <div className="room-structure-filter">
            {structureTypes[val].map((type) => {
              if (structureTypes[val].length > 1) {
                return type + ", ";
              } else {
                return type;
              }
            })}
          </div>
          <table className="room-structure-btns">
            <tr>
              <td>
                <RoomStructureBtn
                  clicked={structureTypes[val].includes("전체")}
                  onClick={() => {
                    !structureTypes[val].includes("전체") &&
                      setStructureTypes({ ...structureTypes, [val]: ["전체"] });
                  }}
                >
                  전체
                </RoomStructureBtn>
              </td>
              <td>
                <RoomStructureBtn
                  clicked={structureTypes[val].includes("오픈형 원룸")}
                  onClick={() => {
                    structureBtnFunc(
                      "오픈형 원룸",
                      val,
                      structureTypes,
                      setStructureTypes
                    );
                  }}
                >
                  오픈형 원룸
                </RoomStructureBtn>
              </td>
              <td>
                <RoomStructureBtn
                  clicked={structureTypes[val].includes("분리형 원룸")}
                  onClick={() =>
                    structureBtnFunc(
                      "분리형 원룸",
                      val,
                      structureTypes,
                      setStructureTypes
                    )
                  }
                >
                  분리형 원룸
                </RoomStructureBtn>
              </td>
            </tr>
            <tr>
              <td>
                <RoomStructureBtn
                  clicked={structureTypes[val].includes("복층형 원룸")}
                  onClick={() => {
                    structureBtnFunc(
                      "복층형 원룸",
                      val,
                      structureTypes,
                      setStructureTypes
                    );
                  }}
                >
                  복층형 원룸
                </RoomStructureBtn>
              </td>
              <td>
                <RoomStructureBtn
                  clicked={structureTypes[val].includes("투룸")}
                  onClick={() => {
                    structureBtnFunc(
                      "투룸",
                      val,
                      structureTypes,
                      setStructureTypes
                    );
                  }}
                >
                  투룸
                </RoomStructureBtn>
              </td>
              <td>
                <RoomStructureBtn
                  clicked={structureTypes[val].includes("쓰리룸+")}
                  onClick={() => {
                    structureBtnFunc(
                      "쓰리룸+",
                      val,
                      structureTypes,
                      setStructureTypes
                    );
                  }}
                >
                  쓰리룸+
                </RoomStructureBtn>
              </td>
            </tr>
          </table>
        </div>
        <ParkingAllow
          mouseDown={typeMouseDown === "주차"}
          typeSelected={parkingAllow[val]}
          onMouseDown={() => setTypeMouseDown("주차")}
          onMouseUp={() => setTypeMouseDown("")}
          onMouseLeave={() => setTypeMouseDown("")}
          onClick={() => {
            setParkingAllow({ ...parkingAllow, [val]: !parkingAllow[val] });
          }}
        >
          <div className="parking-allow-title">주차 옵션</div>
          <div className="parking-allow-article">
            <div className="parking-allow-img" />
            <div className="parking-allow-text">주차 가능만 보기</div>
          </div>
        </ParkingAllow>
      </div>
    </FilterDropdown>
  );
};
export default FilterDropDown;

const FilterDropdown = styled.div`
  display: ${(props) => (props.typeChange && props.toggle ? "block" : "none")};
  .dropdown-top {
    display: flex;
    align-items: center;
    height: 56px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
    position: relative;

    &-close {
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/btn_actionbar_page_close_30_x_30_nor-2989e269bf89255c30fea255a9641c4f.png");
      padding: 9px;
      display: inline-block;
      width: 48px;
      height: 48px;
      background-size: 30px;
      background-repeat: no-repeat;
      background-position: 9px;
      cursor: pointer;
    }
    &-title {
      font-size: 18px;
      margin-top: 2px;
      width: 210px;
      line-height: 30px;
      color: #222222;
      display: inline-block;
    }
    &-reset {
      margin: 2px 0 0 12px;
      padding: 10px 5px;
      line-height: 21px;
      font-size: 14px;
      display: inline-block;
      cursor: pointer;
    }
    &::before {
      content: "";
      display: block;
      position: absolute;
      background-image: url("https://s.zigbang.com/zigbang-www/_next/static/bg_content_shadow_filter_360x6_nor-5230f9767fcb28c43071e299876e268b.png");
      background-size: cover;
      width: 100%;
      height: 6px;
      top: 0;
    }
  }
  .dropdown-list {
    background-color: #eeeeee;
    height: 646px;
    overflow-y: auto;
    .sale-types-item {
      padding: 13px 0 20px;
      background-color: white;
      border-bottom: 1px solid rgb(225, 225, 225);
      .sale-types-title {
        margin: 0 0 3px 13px;
        line-height: 21px;
        font-size: 14px;
      }
      .sale-types-filter {
        margin: 0 0 15px 13px;
        font-size: 20px;
        color: rgb(250, 136, 11);
        font-weight: bold;
        line-height: 30px;
      }
      .sale-types-btn {
        display: flex;
        justify-content: space-around;
        padding: 0 13px;
      }
    }
    .deposit-range {
      background-color: white;
      padding: 20px 0;
      margin-top: 10px;
      border-bottom: 1px solid rgb(225, 225, 225);
      border-top: 1px solid rgb(225, 225, 225);
      .deposit-title {
        margin: 0 0 3px 13px;
        line-height: 21px;
        font-size: 14px;
      }
      .deposit-filter {
        margin: 0 0 15px 13px;
        font-size: 20px;
        color: rgb(250, 136, 11);
        font-weight: bold;
        line-height: 30px;
      }
    }
    .price-range {
      background-color: white;
      padding-top: 20px;
      margin-top: 10px;
      border-bottom: 1px solid rgb(225, 225, 225);
      border-top: 1px solid rgb(225, 225, 225);
      &-title {
        margin: 0 0 3px 13px;
        line-height: 21px;
        font-size: 14px;
      }
      &-filter {
        margin: 0 0 15px 13px;
        font-size: 20px;
        color: rgb(250, 136, 11);
        font-weight: bold;
        line-height: 30px;
      }
    }
    .room-structure {
      padding: 13px 0 20px;
      background-color: white;
      width: 100%;
      margin-top: 10px;
      border-bottom: 1px solid rgb(225, 225, 225);
      border-top: 1px solid rgb(225, 225, 225);
      &-title {
        margin: 0 0 3px 13px;
        line-height: 21px;
        font-size: 14px;
      }
      &-filter {
        margin: 0 0 15px 13px;
        width: 330px;
        font-size: 20px;
        color: rgb(250, 136, 11);
        font-weight: bold;
        line-height: 30px;
        word-break: break-all;
        overflow-wrap: break-word;
      }
      &-btns {
        width: 330px;
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        tr {
          td {
            width: 33%;
            height: 35px;
            outline: none;
            border: 1px solid rgb(202, 202, 202);
            border-collapse: collapse;
          }
        }
      }
    }
  }
`;

const SaleTypeBtn = styled.button`
  width: 104px;
  height: 35px;
  outline: none;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  background-color: ${(props) =>
    props.typeSelected ? "rgb(68, 68, 68);" : "white"};
  background-color: ${(props) => (props.mouseDown ? "rgba(0,0,0,0.1)" : "")};
  background-color: ${(props) =>
    props.mouseDown && props.typeSelected ? "rgba(0,0,0,0.6)" : ""};
  color: ${(props) => (props.typeSelected ? "white" : "#222222")};
  font-weight: ${(props) => (props.typeSelected ? "bold" : "")};
`;

const MangeCost = styled.div`
  display: flex;
  align-items: center;
  padding: 13px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  margin-top: 13px;
  background-color: ${(props) => (props.mouseDown ? "rgba(0,0,0,0.1)" : "")};
  cursor: pointer;
  .manage-cost-img {
    background-image: url(${(props) =>
      props.typeSelected
        ? "https://s.zigbang.com/zigbang-www/_next/static/btn_content_login_checkbox_20x20_sel-e73426568ed24f6dc9bda2332a8733f9.png"
        : "https://s.zigbang.com/zigbang-www/_next/static/btn_content_login_checkbox_20x20_nor-a5fb49e9aeb059cf417a7302a2729f64.png"});
    background-size: cover;

    width: 26px;
    height: 26px;
  }
  .manage-cost-text {
    margin: 4px 0 0 4px;
  }
`;

const RoomStructureBtn = styled.button`
  width: 100%;
  height: 100%;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  background-color: ${(props) => (props.clicked ? "#444444" : "white")};
  font-size: 14px;
  font-weight: ${(props) => (props.clicked ? "bold" : "")};
  color: ${(props) => (props.clicked ? "white" : "#222222")};
  display: inline-block;
`;

const ParkingAllow = styled.div`
  padding: 20px 0 0 0;
  margin-top: 10px;
  background-color: white;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

  .parking-allow-title {
    align-items: center;
    margin: 0 0 3px 13px;
    font-size: 14px;
  }
  .parking-allow-article {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    background-color: ${(props) => (props.mouseDown ? "rgba(0,0,0,0.1)" : "")};
    .parking-allow-img {
      background-image: url(${(props) =>
        props.typeSelected
          ? "https://s.zigbang.com/zigbang-www/_next/static/btn_content_login_checkbox_20x20_sel-e73426568ed24f6dc9bda2332a8733f9.png"
          : "https://s.zigbang.com/zigbang-www/_next/static/btn_content_login_checkbox_20x20_nor-a5fb49e9aeb059cf417a7302a2729f64.png"});
      background-size: cover;
      width: 26px;
      height: 26px;
      display: inline-block;
    }
    .parking-allow-text {
      margin: 4px 0 0 4px;
      display: inline-block;
    }
  }
`;
