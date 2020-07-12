const priceRangeText = (priceRange) => {
  const rangePriceResultArr = [];
  const rangePriceArr = [
    "0",
    "5",
    "10",
    "20",
    "25",
    "30",
    "35",
    "40",
    "50",
    "60",
    "70",
    "100",
    "150",
    "200",
    "250",
    "300",
    "400",
    "500",
    "600",
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
    return rangePriceResultArr[0] + "부터 ~ " + rangePriceResultArr[1] + "까지";
  }
  return "전체";
};

export default priceRangeText;
