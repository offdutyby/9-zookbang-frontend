const priceRangeText = (priceRange) => {
  const rangePriceResultArr = [];
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
  if (rangePriceResultArr[0] === "0" && rangePriceResultArr[1] !== "600") {
    return rangePriceResultArr[1] + "까지";
  } else if (
    rangePriceResultArr[0] !== "0" &&
    rangePriceResultArr[1] === "600"
  ) {
    return rangePriceResultArr[0] + "부터";
  } else if (rangePriceResultArr[0] && rangePriceResultArr[1] !== "600") {
    return rangePriceResultArr[0] + "부터 " + rangePriceResultArr[1] + "까지";
  }
  return null;
};

export default priceRangeText;
