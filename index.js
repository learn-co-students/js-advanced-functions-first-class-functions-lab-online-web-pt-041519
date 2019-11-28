//take an array and return the first two
// drivers = ["pam","chris","mike"]
const returnFirstTwoDrivers = function(drivers){
    //return drivers.slice(0, 2);
    let newarray = []
    for (let i = 0; i < 2; i++) {
         newarray.push(drivers[i])  ;
      }
    return newarray 
} 
//last two
 
// const returnLastTwoDrivers = function(drivers){
//     //return drivers.slice(0, 2);
//     let newarray = []
//     for (var i = drivers.length - 1; i >= 1; i--) {  
//          newarray.push(drivers[i])  ;
//       }
//       return newarray 
// } 

 
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

  let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers ] //without putting () it nows its a function and not a variable?

  // higher-order function that takes in one argument, an integer, 
  //and returns a function that will multiply a fare for a ride accordingly
let createFareMultiplier = function( multi) {
     return function(num) {return num * multi}
 }

 //Declare a variable with const and assign a function returned by createFareMultiplier() to it.
 // Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as 
 //its lone argument and doubles it.
 const fareDoubler = function(fare){
      let double = createFareMultiplier(2)
        return double(fare)
 } 

 //fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. 
 //Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);




 //selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or
 // returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers 
 //or the last two drivers.

 

function selectDifferentDrivers(drivers, returndrivers) {
    return returndrivers(drivers);
  };