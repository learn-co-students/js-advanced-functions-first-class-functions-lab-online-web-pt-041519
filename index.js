// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
  let returnArr = arr.slice(0,2)
  return returnArr
}

const returnLastTwoDrivers = function(arr) {
  let returnArr = arr.slice(-2,arr.length)
  return returnArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function(fare) {
    return fare*int
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arr, fn) {
  return fn(arr)
}
