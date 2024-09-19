/*let number = 10 
function isInRange(number >= 10 && <= 20){
    if (number < 10 );{
    console.log('true')};
    else (number > 10) ;
    console.log('false')
    
}
// Switch case
/*function isInRange(number) {
    switch(number) {
        case (number >= 10 && <= 20):
            return true
        break
        default:
            return false
    }
}
console.log(isInRange)*/
/*
Create a function named dayGreeting that takes a string representing a day of the week 
(e.g., "Monday", "Wednesday", "Saturday") and returns "It's a weekday!" for Monday through 
Friday and "It's the weekend!" for Saturday and Sunday.
*/
//
let day = 'Monday'
function dayGreeting(day){
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday' ) {
    return('Its a weekday!') ;}
    else (day === 'Saturday' || day === 'Sunday'); {
        return ('It is a weekend')
    }
}
console.log(dayGreeting())