// Code your solution in this file!
// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Store both functions in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Create a higher-order function to multiply fare
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Create fareDoubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. Create fareTripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. Create function to return either first or last two drivers
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
