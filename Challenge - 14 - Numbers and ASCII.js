/*
JSFiddle Name: Challenge 14
Learn about the Numeral Systems (Binary, Octal, Decimal, Hex) and the ASCII table. You can use the CS50 first problem set as a reference (we recommend that you do as much you can from CS50 problem sets)

1) If we\'re counting in the number system that has base 3, we only can use 0, 1, 2. The first 6 numbers would be:
0, 1, 2, 10, 11, 12
Keep counting, what are the next 6 numbers?
*/

NEXT NUMBERS ARE: 21, 22, 100, 101, 102, 110

/*

2) Write a single chain of JavaScript methods that we can execute on the following ASCII array, to convert it into a sentence.

var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115]
So you would do something like:

ascii.function1(..).function2(..).function3(..) ..
and the result would be the numbers above converted form ASCII to text (you can only use JS built-in function for this)

*/

var ascii = [73, 32, 115, 112, 101, 97, 107, 32, 105, 110, 32, 110, 117, 109, 98, 101, 114, 115];


document.write(String.fromCharCode.apply(null, ascii));


//"I speak in numbers"

