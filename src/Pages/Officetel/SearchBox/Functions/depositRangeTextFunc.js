const depositRangeText = (depositRange) => {
  const rangePriceResultArr = [];
  const rangePriceArr = [
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
    return rangePriceResultArr[0] + "부터 " + rangePriceResultArr[1] + "까지";
  }
  return null;
};

export default depositRangeText;
