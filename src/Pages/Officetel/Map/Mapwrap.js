import React, { useState } from 'react';
import Nav from 'Components/Nav';
import Map from './Map';
import AsideBox from '../AsideBox';
import OfficetelNavBox from '../OfficetelNavBox';
import SearchBox from '../SearchBox';
import Modalwrapper from '../SearchBox/Modalwrapper';

const Mapwrap = () => {
  const [clickSearch, setClickSearch] = useState('');
  const [inputSearch, setInputSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [modalDisplayOn, setModalDisplayOn] = useState(false);
  //필터링을 위한 state
  const [saleType, setSaleType] = useState('전체');
  const [depositRange, setDepositRange] = useState({
    전체: [0, 30],
    전세: [0, 30],
    월세: [0, 30],
  });
  const [priceRange, setPriceRange] = useState({
    전체: [0, 18],
    전세: [0, 18],
    월세: [0, 18],
  });
  const [manageCost, setManageCost] = useState({
    전체: false,
    전세: false,
    월세: false,
  });
  const [structureTypes, setStructureTypes] = useState({
    전체: ['전체'],
    전세: ['전체'],
    월세: ['전체'],
  });
  const [parkingAllow, setParkingAllow] = useState({
    전체: false,
    전세: false,
    월세: false,
  });

  const searchClick = () => {
    setClickSearch(inputSearch);
  };

  const searchValue = (e) => {
    setInputSearch(e.target.value);
  };

  return (
    <>
      <Nav />
      <Modalwrapper modalDisplayOn={modalDisplayOn} setModalDisplayOn={setModalDisplayOn} setSaleType={setSaleType} />
      <OfficetelNavBox />
      <SearchBox
        setModalDisplayOn={setModalDisplayOn}
        searchClick={searchClick}
        searchValue={searchValue}
        saleType={saleType}
        setSaleType={setSaleType}
        depositRange={depositRange}
        setDepositRange={setDepositRange}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        structureTypes={structureTypes}
        setStructureTypes={setStructureTypes}
        manageCost={manageCost}
        setManageCost={setManageCost}
        parkingAllow={parkingAllow}
        setParkingAllow={setParkingAllow}
      />
      <Map inputValue={clickSearch} setSearchList={(inp) => setSearchList(inp)} />
      <AsideBox searchList={searchList} />
    </>
  );
};

export default Mapwrap;
