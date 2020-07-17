const priceRangeNumber = (priceRange) => {
  const rangePriceResultArr = [];
  const rangePriceArr = [
    0,
    50000,
    100000,
    200000,
    250000,
    300000,
    350000,
    400000,
    500000,
    600000,
    700000,
    1000000,
    1500000,
    2000000,
    2500000,
    3000000,
    4000000,
    5000000,
    6000000,
  ];
  priceRange.map((x) => {
    rangePriceResultArr.push(rangePriceArr[x]);
  });

  return rangePriceResultArr;
};

export default priceRangeNumber;
