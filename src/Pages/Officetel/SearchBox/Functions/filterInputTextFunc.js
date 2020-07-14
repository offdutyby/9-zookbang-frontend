const filterInputText = (
  depositRange,
  priceRange,
  manageCost,
  structureTypes,
  parkingAllow
) => {
  const rangePriceResultArr = [];
  const rangeDepositResultArr = [];
  const rangePriceArr = [
    "0",
    "5만",
    "10만",
    "20만",
    "25만",
    "30만",
    "35만",
    "40만",
    "50만",
    "60만",
    "70만",
    "1백만",
    "1.5백만",
    "2백만",
    "2.5백만",
    "3백만",
    "4백만",
    "5백만",
    "6백만",
  ];
  priceRange.map((x) => {
    rangePriceResultArr.push(rangePriceArr[x]);
  });
  const priceRangeFunc = () => {
    if (rangePriceResultArr[0] === "0" && rangePriceResultArr[1] !== "6백만") {
      return rangePriceResultArr[1] + "까지";
    } else if (
      rangePriceResultArr[0] !== "0" &&
      rangePriceResultArr[1] === "6백만"
    ) {
      return rangePriceResultArr[0] + "부터";
    } else if (rangePriceResultArr[0] && rangePriceResultArr[1] !== "6백만") {
      return rangePriceResultArr[0] + "부터 " + rangePriceResultArr[1] + "까지";
    }

    return null;
  };

  const rangeDepositArr = [
    "0",
    "50만",
    "1백만",
    "2백만",
    "3백만",
    "5백만",
    "1천만",
    "2천만",
    "3천만",
    "4천만",
    "5천만",
    "6천만",
    "7천만",
    "8천만",
    "9천만",
    "1억",
    "1.2억",
    "1.5억",
    "1.7억",
    "2억",
    "2.5억",
    "3억",
    "3.5억",
    "4억",
    "5억",
    "7억",
    "10억",
    "12억",
    "15억",
    "20억",
    "25억",
  ];
  depositRange.map((x) => {
    return rangeDepositResultArr.push(rangeDepositArr[x]);
  });
  const depositRangeFunc = () => {
    if (
      rangeDepositResultArr[0] === "0" &&
      rangeDepositResultArr[1] !== "25억"
    ) {
      return rangeDepositResultArr[1] + "까지";
    } else if (
      rangeDepositResultArr[0] !== "0" &&
      rangeDepositResultArr[1] === "25억"
    ) {
      return rangeDepositResultArr[0] + "부터";
    } else if (
      rangeDepositResultArr[0] &&
      rangeDepositResultArr[1] !== "25억"
    ) {
      return (
        rangeDepositResultArr[0] + "부터 " + rangeDepositResultArr[1] + "까지"
      );
    }
    return null;
  };
  const manageCostFunc = () => {
    return manageCost ? "관리비 포함" : false;
  };
  const structureTypesFunc = () => {
    const structureTypesArr = structureTypes
      .filter((x) => x !== "전체")
      .join(", ");

    return structureTypesArr.length > 0 ? structureTypesArr : false;
  };

  const parkingAllowFunc = () => {
    return parkingAllow ? "주차 가능만" : false;
  };

  const beforeReturnArr = [
    depositRangeFunc(),
    priceRangeFunc(),
    manageCostFunc(),
    structureTypesFunc(),
    parkingAllowFunc(),
  ];
  const returnArr = beforeReturnArr.filter((x) => x).join(" ･ ");
  return returnArr.length > 0 ? returnArr : "검색 조건을 설정해주세요.";
};

export default filterInputText;
