/** Write a javascript function that takes multiple arguments that are all integers and calculates the following:

* Count of odd integers
* Count of negative integers
* The average of all integers (round to 2 decimal)
* The median of all integers
* The function should return these values in an object.

*/

//PROBLEM: (1) HOW TO MERGE ALL INTO ONE FUNCTION  (2) RETURN EACH ANSWER INTO ARRAY
//(3) INCLUDING NEGATIVE NUMBERS

//ODD COUNT
var a = [/*ARRAY GOES HERE*/];
function countOdds(arr)
{
  var oddCount = 0;
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] % 2 == 1) // if it's odd
      oddCount++;        // increment the counter
  }
  return oddCount;
}

console.log(countOdds(a));


//NEGATIVE COUNT

var a = [/*ARRAY GOES HERE*/];
function negativeNumber(arr)
{
  var negCount = 0;
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] < 0) // if it's odd
      negCount++;        // increment the counter
  }
  return negCount;
}

console.log(negativeNumber(a));

//AVERAGE OF ALL INTEGERS

var arr = [7, -3, 0, 12, 44, -5, 3];
var sum = arr.reduce(function(a, b) { return a + b; });
var avg = sum / arr.length;
var rounded = Math.round(avg * 100) / 100;
console.log(rounded);

//MEDIAN OF ALL INTEGERS


function median(arr) {

    arr.sort( function(a,b) {return a - b;} );

    var half = Math.floor(arr.length/2);

    if(arr.length % 2)
        return arr[half];
    else
        return (arr[half-1] + arr[half]) / 2;
}

