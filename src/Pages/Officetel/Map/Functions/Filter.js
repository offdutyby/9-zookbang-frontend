import depositRangeNumber from "./depositRangeNumber";
// import priceRangeNumber from "./Functions/priceRangeNumber";
const filterRoom = (officetel, saleType, depositRange) => {
  console.log(depositRange);
  const filteredRoom = officetel.roomFilter.filter((room) => {
    return room.tradeType === saleType || saleType === "전체";
  });

  const filteredRangeRoom = filteredRoom.filter((room) => {
    return (
      depositRangeNumber(depositRange[saleType])[0] <= +room.deposit &&
      +room.deposit <= depositRangeNumber(depositRange[saleType])[1]
    );
  });

  return {
    ...officetel,
    roomFilter: filteredRangeRoom,
  };
};

const filterLocation = (data, saleType, depositRange) => {
  console.log(saleType);
  const filteredData = data.map((officetel) => {
    return filterRoom(officetel, saleType, depositRange);
  });
  return filteredData;
};
export default filterLocation;

// const filterLocation = (
//   dataJSON,
//   parkingAllow,
//   depositRange,
//   priceRange,
//   saleType,
//   structureTypes
// ) => {
//   return dataJSON.result.map((location) => {
//     return location.roomFilter.filter((room) => {
//       return (
//         (parkingAllow ? location.isParkingLot === true : true) &&
//         depositRangeNumber(depositRange)[0] <= parseInt(room.deposit) &&
//         depositRangeNumber(depositRange)[1] >= parseInt(room.deposit) &&
//         priceRangeNumber(priceRange)[0] <=
//           (room.maintenanceFee
//             ? parseInt(room.monthlyRent) + parseInt(room.maintenanceFee)
//             : parseInt(room.monthlyRent)) &&
//         priceRangeNumber(priceRange)[1] >=
//           (parseInt(room.maintenanceFee)
//             ? parseInt(room.monthlyRent) + parseInt(room.maintenanceFee)
//             : parseInt(room.monthlyRent)) &&
//         (room.roomType === saleType || saleType === "전체") &&
//         (structureTypes.includes(room.subRoomType) || structureTypes === "전체")
//       );
//     });
//   });
// };

// const filterLocation = (
//   dataJSON,
//   parkingAllow,
//   depositRange,
//   priceRange,
//   saleType,
//   structureTypes
// ) => {
//   return dataJSON.result.map((location) => {
//     return location.roomFilter.filter((room) => {
//       return (
//         (parkingAllow ? location.isParkingLot === true : true) &&
//         depositRangeNumber(depositRange)[0] <= parseInt(room.deposit) &&
//         depositRangeNumber(depositRange)[1] >= parseInt(room.deposit) &&
//         priceRangeNumber(priceRange)[0] <=
//           (room.maintenanceFee
//             ? parseInt(room.monthlyRent) + parseInt(room.maintenanceFee)
//             : parseInt(room.monthlyRent)) &&
//         priceRangeNumber(priceRange)[1] >=
//           (parseInt(room.maintenanceFee)
//             ? parseInt(room.monthlyRent) + parseInt(room.maintenanceFee)
//             : parseInt(room.monthlyRent)) &&
//         (room.roomType === saleType || saleType === "전체") &&
//         (structureTypes.includes(room.subRoomType) || structureTypes === "전체")
//       );
//     });
//   });
// };
