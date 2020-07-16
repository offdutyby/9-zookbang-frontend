import React, { useState } from "react";
import styled from "styled-components";
import FilterDropDown from "./FilterDropDown";
import filterInputTextFunc from "./Functions/filterInputTextFunc";

const SearchBox = ({
  searchClick,
  searchValue,
  setModalDisplayOn,
  saleType,
  setSaleType,
  depositRange,
  setDepositRange,
  priceRange,
  setPriceRange,
  structureTypes,
  setStructureTypes,
  manageCost,
  setManageCost,
  parkingAllow,
  setParkingAllow,
}) => {
  const [typeMouseDown, setTypeMouseDown] = useState('');
  const [dropDownToggle, setDropDownToggle] = useState(false);

  return (
    <Search modalMouseDown={typeMouseDown === '모달'} filterMouseDown={typeMouseDown === '필터'}>
      <div className='input-container'>
        <div className='input-box'>
          <input placeholder='아파트, 지역, 지하철, 학교검색' onChange={searchValue}></input>
          <button onClick={searchClick} type='button' alt='검색' />
        </div>
      </div>
      <div className='filter-container'>
        <div
          className='sale-types'
          onClick={() => setModalDisplayOn(true)}
          onMouseDown={() => setTypeMouseDown('모달')}
          onMouseUp={() => setTypeMouseDown('')}
          onMouseLeave={() => setTypeMouseDown('')}
        >
          <div className='sale-types-text'>{saleType}</div>
          <div className='sale-types-img' />
        </div>
        <div
          className='filter-box'
          onClick={() => {
            setDropDownToggle(true);
          }}
          onMouseDown={() => setTypeMouseDown('필터')}
          onMouseUp={() => setTypeMouseDown('')}
          onMouseLeave={() => setTypeMouseDown('')}
        >
<<<<<<< HEAD
          <div className='filter-input'>검색 조건을 설정해주세요.</div>
          <div className='filter-btn'>
            <div className='filter-btn-img'></div>
            <div className='filter-btn-text'>필터</div>
=======
          <div className="filter-input">
            <div>
              {filterInputTextFunc(
                depositRange[saleType],
                priceRange[saleType],
                manageCost[saleType],
                structureTypes[saleType],
                parkingAllow[saleType]
              )}
            </div>
          </div>
          <div className="filter-btn">
            <div className="filter-btn-img"></div>
            <div className="filter-btn-text">필터</div>
>>>>>>> master
          </div>
        </div>
      </div>
      {['전체', '전세', '월세'].map((val, idx) => {
        return (
          <FilterDropDown
            key={idx}
            val={val}
            saleType={saleType}
            setSaleType={setSaleType}
            depositRange={depositRange}
            setDepositRange={setDepositRange}
            typeMouseDown={typeMouseDown}
            setTypeMouseDown={setTypeMouseDown}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            structureTypes={structureTypes}
            setStructureTypes={setStructureTypes}
            manageCost={manageCost}
            setManageCost={setManageCost}
            parkingAllow={parkingAllow}
            setParkingAllow={setParkingAllow}
            dropDownToggle={dropDownToggle}
            setDropDownToggle={setDropDownToggle}
          />
        );
      })}
    </Search>
  );
};

export default SearchBox;

const Search = styled.div`
  z-index: 500;
  position: fixed;
  left: 20px;
  top: 141px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.15);

  .input-container {
    padding: 10px;
    .input-box {
      display: inline-block;
      border: 1px solid rgb(250, 136, 11);
      border-radius: 4px;
      input {
        border-radius: 4px;
        padding: 0 12px;
        width: 280px;
        font-size: 13px;
        height: 28px;
        border: none;
        outline: none;
      }
      button {
        width: 30px;
        float: right;
        height: 28px;
        border: none;
        outline: none;
        background: url('https://s.zigbang.com/www/images/ic_title_searchbar_30x30_nor_white.png') center center / 100% no-repeat transparent;
        background-color: rgb(250, 136, 11);
        cursor: pointer;
      }
    }
  }
  .filter-container {
    padding: 7px 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    background-color: white;
    display: flex;
    justify-content: space-between;

    .sale-types {
      padding: 6px 10px;
      width: 78px;
      height: 30px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      background-color: ${(props) => (props.modalMouseDown ? 'rgba(0,0,0,0.1)' : 'white')};

      &-text {
        position: relative;
        bottom: -2px;
        color: #222222;
        font-size: 12px;
        line-height: 18px;
        margin-right: 3px;
      }

      &-img {
        background-image: url('https://s.zigbang.com/zigbang-www/_next/static/ic_btn_arrow_open_18x18_nor_black-20dd6c412a723f182ebf9d7209b4487d.png');
        background-size: cover;
        width: 18px;
        height: 18px;
      }
    }
    .filter-box {
      display: flex;
      cursor: pointer;
      background-color: ${(props) => (props.filterMouseDown ? 'rgba(0,0,0,0.1)' : 'white')};
      .filter-input {
        color: #222222;
        font-size: 13px;
        line-height: 19px;
        padding: 7px 9px 5px 9px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        width: 193px;
        height: 30px;
        border: 1px solid rgba(0, 0, 0, 0.15);
        div {
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
      .filter-btn {
        width: 60px;
        height: 30px;
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        border: 1px solid rgb(68, 68, 68);

        &-img {
          background-image: url('https://s.zigbang.com/zigbang-www/_next/static/ic_btn_filter_18x18_nor_black-a5e09876a82fb5417126fcdbad01555c.png');
          background-size: cover;
          width: 20px;
          height: 20px;
          margin-right: 2px;
        }
        &-text {
          position: relative;
          bottom: -2px;
          display: flex;
          line-height: 19px;
          font-size: 13px;
          color: #222222;
        }
      }
    }
  }
`;
