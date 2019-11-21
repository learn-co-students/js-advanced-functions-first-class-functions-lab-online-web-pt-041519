const returnFirstTwoDrivers = function returnFirstTwoDrivers(array)
{
   let drivers12 = [array[0], array[1]]
   return drivers12
}

const returnLastTwoDrivers = function returnLastTwoDrivers(array)
{
   let driversLast = [array[array.length-2], array[array.length-1]]
   return driversLast
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int)
{
    return function(fare)
    {
        return int*fare
    }
}

function fareDoubler(fare)
{
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare)
{
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, func)
{
    return func(drivers)
}