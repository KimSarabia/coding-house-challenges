/** Write a javascript function that takes multiple arguments that are all integers and calculates the following:

* Count of odd integers
* Count of negative integers
* The average of all integers (round to 2 decimal)
* The median of all integers
* The function should return these values in an object.

*/

var arr = [1,2,3];

function  arrayAnalyzer() {
  var object = {}; //this is the container
var isOdd = function(arr) {
   
  var key = "odd";
  var oddCount = 0;
  for(var i = 0; i < arr.length; i++) {
   if (Math.abs(arr[i] % 2) == 1)
   {oddCount++;}
}
  object[key] = oddCount;
  
};

isOdd(arr);
  
function negativeNumber(arr)
{
  var key = "negative";
  var negCount = 0;
  for(var i = 0; i < arr.length; i++)
  {
    if(arr[i] < 0) // if it's odd
    {negCount++;}        // increment the counter
  }
    object[key] = negCount; //this is what I forgot to do...1/5/2015
  //also don't forget to put curly braces after an if statement
  

}

console.log(negativeNumber(arr));

key = "median";
function median(arr) 
  {
    arr.sort( function(a,b) {return a - b;} );

    var half = Math.floor(arr.length/2);

    if(arr.length % 2)
    {return arr[half];}
    else
    {return (arr[half-1] + arr[half]) / 2;}
  

}
object[key] = median(arr);  
  

var key = "average";

var sum = arr.reduce(function(a, b) { return a + b; });
var avg = sum / arr.length;
var rounded = Math.round(avg * 100) / 100;
object[key] = rounded;


  
console.log(object);
  
 

}
arrayAnalyzer(arr);
