// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers){
    // return [array[0], array[1]]
    return drivers.slice(0,2)
}
// returnFirstTwoDrivers()

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2)
}
// returnLastTwoDrivers()

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function(integer){
    return function(fare){
        return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function(drivers, unknownDriver){
    return unknownDriver(drivers)
}