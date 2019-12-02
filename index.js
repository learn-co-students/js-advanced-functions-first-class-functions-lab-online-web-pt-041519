const returnFirstTwoDrivers = function(driverArray) {
    return [driverArray[0], driverArray[1]]
}

const returnLastTwoDrivers = function(driverArray) {
    return [driverArray[driverArray.length - 2], driverArray[driverArray.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(int) {
    return function(fare) { return fare * int }
}

const fareDoubler = function(fare) { return createFareMultiplier(2)(fare) }
const fareTripler = function(fare) { return createFareMultiplier(3)(fare) }

const selectDifferentDrivers = function(driverArray, pickingFunction) {
    return pickingFunction(driverArray)
}