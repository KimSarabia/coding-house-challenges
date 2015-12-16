
var str = "stash and pop on this level";
var words = str.split(" ");
var palindrome = words.map(function isPalindrome(str){
    if(str.length === 0) { 
      return true;
    }
    if(str[0] !== str[str.length-1]){ 
      return false;
    }
    return isPalindrome(str.slice(1,str.length-1));
});

console.log(palindrome);

// [false, false, true, false, false, true]
