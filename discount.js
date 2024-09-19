/*
Write a function called calculateDiscount that takes two arguments: price (a number) and isMember (a boolean). 
If isMember is true, apply a 15% discount to the price. If isMember is false, apply a 5% discount. 
The function should return the final price after the discount is applied.

*/
const prompt = require('prompt-sync')()
let price = prompt('Enter price')
let isMember = prompt('Enter membership(yes or no):')

function calculateDiscount(price, isMember) {
  let discountRate;

  if (isMember === 'yes') {
    discountRate = 0.15;
  } else {
    discountRate = 0.05;
  }

  const discountAmount = price * discountRate;
  const finalPrice = price - discountAmount;

  return finalPrice;
}



// Calculate the final price
const finalPrice = calculateDiscount(price, isMember);

console.log(`Final price: ${finalPrice}`);
//How do I enable the prompt?
// I want the user to input the price
//okay.
//What if I want to use a decimal number
//yeah.