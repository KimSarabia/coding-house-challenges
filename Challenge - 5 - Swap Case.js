var swapCase = function(string){
    var newString = " ";
    for(var i = 0; i< string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            newString += string[i].toUpperCase();
        }else {
            newString += string[i].toLowerCase();
        }
    }
    console.log(newString);
    return newString;
};

var text = 'She was lost in her longing to understand.';

var swappedCases = swapCase(text); 

//" sHE WAS LOST IN HER LONGING TO UNDERSTAND."
