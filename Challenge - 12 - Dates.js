/*
Write a JavaScript function that takes 3 arguments (year, month, and day) and calculates how many days between that day and today

* If the days are more than 30, return Y months, Z days
* If the months are more than 12, return X years, Y months, Z days

Test Cases

(Assuming today is April 2nd, 2015)

age(2017, 11, 17) -> 2 years, 8 months, 15 days

age(2015, 3, 6) -> 4 days
Note that the month argument starts from 0 (11 is December)
*/
function age (year, month, day) {
  today = new Date();
  var chosenDate = new Date(year, (month - 1), day);
  
  var one_day = 1000*60*60*24;
  var one_month = one_day*30;
  var one_year = one_month*12;  

var days = Math.floor((chosenDate.getTime()-today.getTime() ) / (one_day) );
var months = Math.floor((chosenDate.getTime()-today.getTime() ) / (one_month));
var years = Math.floor((chosenDate.getTime()-today.getTime() ) / (one_year));



if(days > 29) {
	days -= (30 * months);
}

if(months > 11) {
	months -= (11 * years);
}
  
if (years === 0) {
	if (months !== 0 && days !== 0){
		return months + ' months, ' + days + ' days';
	}
	if (months === 0) {
		return days + ' days';
	}
	if (days === 0) {
		return months + ' months, ';
	}
}

if (years !==0) {
	if (months === 0 && days === 0) {
		return years + 'years';
	}
	if (month !== 0 && days !==0) {
		return years + ' years, ' + months + ' months, ' + days + ' days';
	}
	if (months === 0){
		return years  + ' years, ' + days + ' days';
	}
	if (days === 0){
		return years  + ' years, ' + months + ' months';
	}
}

}

console.log(age(2016, 3, 12));

