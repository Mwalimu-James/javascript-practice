/*
Leap Year Checker
Create a function named isLeapYear that takes a year as an argument and returns true if the year is a leap year and false otherwise. A year is a leap year if:
It is divisible by 4, and
It is not divisible by 100, unless it is also divisible by 400.

*/
let year = 2000
/
function isLeapYear(year ) {
    if (year % 4 === 0 && year % 100 !== 0) {
      return true;
    
    } else if( year % 400 === 0 && year % 100 === 0 && year %400 ===0)
        return true;
    } else {
        return false;
    }
  }
console.log(isLeapYear())
