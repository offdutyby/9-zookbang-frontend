const depositRangeText = (depositRange) => {
  const rangePriceResultArr = [];
  const rangePriceArr = [
    "0",
    "50",
    "100",
    "200",
    "300",
    "500",
    "1,000",
    "2,000",
    "3,000",
    "4,000",
    "5,000",
    "6,000",
    "7,000",
    "8,000",
    "9,000",
    "1억",
    "1억 2,000",
    "1억 5,000",
    "1억 7,000",
    "2억",
    "2억 5,000",
    "3억",
    "3억 5,000",
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
    return rangePriceResultArr.push(rangePriceArr[x]);
  });
  if (rangePriceResultArr[0] === "0" && rangePriceResultArr[1] !== "25억") {
    return rangePriceResultArr[1] + "까지";
  } else if (
    rangePriceResultArr[0] !== "0" &&
    rangePriceResultArr[1] === "25억"
  ) {
    return rangePriceResultArr[0] + "부터";
  } else if (rangePriceResultArr[0] && rangePriceResultArr[1] !== "25억") {
    return rangePriceResultArr[0] + "부터 ~ " + rangePriceResultArr[1] + "까지";
  }
  return "전체";
};

export default depositRangeText;
