/** Use a variety of different solutions to find the largest number in an array. 
Use a while loop, a do..while loop, a for loop, and a forEach loop. 
Use the following array for each of these loops:

[2, 7, 4, 8, 6, 4]

Using a for...in loop, console.log all of the keys and values in the following object:

{ "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] }

Using the .map function return an array that is equal to the squares each of the values in the following array:

[1, 2, 5, 7, 11]

Using the .reduce function find the product of the numbers in the following array:

[3, 5, 7, 9, 12]

Using the .filter function create a new array of only odd numbers from the following array:

[1, 22, 35, 2, 4, 7, 9]

Using the .sort function, sort the following array reverse-alphabetically:

['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee']

*/

//WHILE LOOP
var array = [2, 7, 4, 8, 6, 4];
var largest = 0;
var i = 0;

while (i < array.length) {
	if (array[i] > largest) {
		largest = array[i];
	}
	i = i + 1
}

console.log(largest);

////////////////////////////////////////////////////////////////////////////////


//DO...WHILE LOOP

var arr = [2, 7, 4, 8, 6, 4];
var largest = arr[0];
var i = 0;
do {
  if (largest < arr[i]) {
    largest = arr[i];
  }
      i++;
} while (i < arr.length);
console.log(largest);


//Alternative
var arr = [2, 7, 4, 8, 6, 4];
var largest = arr[0];
var i = 0;
do {
    largest = Math.max(largest, arr[i]);
    i++;
} while (i < arr.length);

console.log(largest);

//Result: 8

////////////////////////////////////////////////////////////////////////////////


//FOR LOOP

var array = [2, 7, 4, 8, 6, 4];
var largest = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        largest = array[i];
    }
}
console.log(largest);

////////////////////////////////////////////////////////////////////////////////


//FOR EACH LOOP
// Create an array.
var arr = [2, 7, 4, 8, 6, 4];

// Call the addNumber callback function for each array element.
var max = 0;

arr.forEach(
  function findMax(value){
    if (value > max){max = value;}
  }
    );

console.log(max);
// Output: 8



////////////////////////////////////////////////////////////////////////////////

//FOR IN LOOP
var text = "";
var car = { "wheels": 3, "horsepower": 600, "decal": "flames", "awesome": true , "holdsBarred": [] };


for (var i in car)
{
	text = text + car[i];
}

console.log(text);

////////////////////////////////////////////////////////////////////////////////


// .MAP() METHOD

var numbers = [1, 2, 5, 7, 11];
var square = numbers.map(function(num) {
  return num * num;
});

console.log(square);

////////////////////////////////////////////////////////////////////////////////


// .FILTER() METHOD

function isOdd(num) { 
  return num % 2;
}
var filtered = [1, 22, 35, 2, 4, 7, 9].filter(isOdd);
console.log(filtered);
// → filtered is [1, 35, 7, 9]

////////////////////////////////////////////////////////////////////////////////

// .SORT() METHOD

var things = ['water', 'balloon', 'baseball', 'computer', 'notebook', 'frisbee'];

things.sort(function(a, b) {
    if(a > b) {
        return -1;
    }
    else if(a < b) {
        return 1;
    }
    else {
        return 0;
    }
});

console.log(things);

// → ["water", "notebook", "frisbee", "computer", "baseball", "balloon"]




