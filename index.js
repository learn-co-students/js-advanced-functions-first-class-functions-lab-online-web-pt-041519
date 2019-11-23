// Code your solution in this file!

const returnFirstTwoDrivers = function(array) {
    const [d1, d2] = array
    let newArray = []
    newArray.push(d1)
    newArray.push(d2)
    return newArray
}

const returnLastTwoDrivers = function(array) {
    const [, , d3, d4] = array
    let newArray = []
    newArray.push(d3)
    newArray.push(d4)
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(integer) {
    return function (fare) {
        return integer * fare
    }
}

function fareDoubler(fare) {    
    return fare * 2
}

function fareTripler(fare) {
    return fare * 3
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers)
}