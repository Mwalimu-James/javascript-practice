//functions passed in other functions as argument
/*function greet(fnc){
    return fnc()
}
const hello = function(){
    return "hello"
}
console.log(greet(hello))
*/
/*
Simple Callback Function
Write a function called processData that takes a number and a callback function as parameters. 
Inside processData, call the callback function with the number doubled. 
Write a callback function that logs the result to the console. 
Test your function.

*/
function processData(num, fnc) {
    return fnc(num * 2)
}
const doubleNumber = function(ans) {
    return ans
}
console.log(processData(6,ans => ans))