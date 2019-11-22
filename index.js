// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    const firstTwo = function(arrayOfDrivers) {
        let newArray = []
        newArray.push(arrayOfDrivers[0])
        newArray.push(arrayOfDrivers[1])
        return newArray
    }
    return firstTwo(drivers)
}

function returnLastTwoDrivers(drivers) {
    const lastTwo = function(arrayOfDrivers) {
        let slice = arrayOfDrivers.slice(-2)
        return slice
    }
    return lastTwo(drivers)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare) {
        return fare * integer
    }
}

function fareDoubler(fare) {
    const double = createFareMultiplier(2)
    return double(fare)
}


function fareTripler(fare) {
    const triple = createFareMultiplier(3)
    return triple(fare)
}

function selectDifferentDrivers(arrayOfDrivers, firstOrLastTwo) {
    return firstOrLastTwo(arrayOfDrivers)
}