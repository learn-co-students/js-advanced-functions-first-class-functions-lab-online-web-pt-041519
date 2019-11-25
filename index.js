// Code your solution in this file!

const returnFirstTwoDrivers = (arrayOfDrivers) => {
 return arrayOfDrivers.slice(0, 2)
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
  return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

const createFareMultiplier = (int) => {
  return function(fare){
    return fare * int
  }
}

const fareDoubler = (int) => {
  let doubleUp = createFareMultiplier(2)
  return doubleUp(int)
}

const fareTripler = (int) => {
  let tripleUp = createFareMultiplier(3)
  return tripleUp(int)
}

const selectDifferentDrivers = (arrayOfDrivers, funcArg) => {
  return funcArg(arrayOfDrivers)
}