// Return first 2 drivers from array
const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2)
} 

// Return last 2 drivers from array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(Math.max(drivers.length - 2, 0))
}

// Populate array with two functions above
const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
]

// Return function to multiply value
const createFareMultiplier = function(multiplier) {
  return function (fare) {
    return multiplier * fare;
  };
}

// Double fare
const fareDoubler = createFareMultiplier(2) 

// Triple fare
const fareTripler = createFareMultiplier(3)

// Return value of input function with array
const selectDifferentDrivers = function(drivers, action) {
  return action(drivers)
}