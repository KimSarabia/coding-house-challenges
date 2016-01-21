
/* Write a javascript counter function that takes a text argument and count the following:
Number of words in the text
Number of characters in the text
Number of spaces in the text
Average word length
Test case
superCounter("Count me in");
would count 3 words, 11 characters, 3 chars avg word length, and 2 spaces.
Return output as a single object, and don't use any libraries.
Example output:
{"words": 3, "chars": 11, "avgLength": 3, "spaces": 2}
Again, this is a returned object, not a string.
*/


function superCounter(str) {
   
  var words = str.split(" ").length;
  var characters = str.length;
  var spaces = (str.split(" ").length - 1);
  var array = str.split(" ");
  var average = 0;
    for (var i = 0; i < words; i++){
        average += array[i].length;
    }
    var avgLength = average / words;

  var obj = {
        words: words,
        character: characters,
        spaces: spaces,
        avgLength: avgLength  
    };
  return obj;
}

    console.log(superCounter("I celebrate myself, and sing myself."));
    
    /*
    [object Object] {
  avgLength: 5.166666666666667,
  character: 36,
  spaces: 5,
  words: 6
}
    */
    
