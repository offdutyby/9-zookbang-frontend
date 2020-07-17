const depositRangeNumber = (depositRange) => {
  const rangeDepositResultArr = [];
  const rangeDepositArr = [
    0,
    50,
    100,
    200,
    300,
    500,
    1000,
    2000,
    3000,
    4000,
    5000,
    6000,
    7000,
    8000,
    9000,
    10000,
    12000,
    15000,
    17000,
    20000,
    25000,
    30000,
    35000,
    40000,
    50000,
    70000,
    100000,
    120000,
    150000,
    200000,
    250000,
  ];
  depositRange.map((x) => {
    return rangeDepositResultArr.push(rangeDepositArr[x]);
  });
  return rangeDepositResultArr;
};

export default depositRangeNumber;
