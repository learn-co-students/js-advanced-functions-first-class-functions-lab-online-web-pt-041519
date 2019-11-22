// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
    let thing = array.slice(0,2);
    return thing;
};

const returnLastTwoDrivers = function (array){
    const lastTwo = array.slice(-2);
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer){
    return function(quad){
        return integer * quad;
    };
}; 

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, selectDifferentDrivers){
    return selectDifferentDrivers(drivers);
};