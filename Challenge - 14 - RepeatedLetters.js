function LetterCountI(str) {
    str = str.toLowerCase();
    var arr = str.split(" ");
    var count = 0;
    var word = [];
  
    for (var i = 0; i < arr.length; i++) {
        for (var a = 0; a < arr[i].length; a++) {
            var countNew = 0;
            for (var b = a + 1; b < arr[i].length; b++) {
                if (arr[i][a] === arr[i][b])
                    countNew += 1;
            }
            if (countNew > count) {
                countNew = count;
                word.push(arr[i]);
              break;
            }
        }
    }
    return word;
}

console.log(LetterCountI("They dodged a kerfuffle."));


// ["dodged","kerfuffle"]
