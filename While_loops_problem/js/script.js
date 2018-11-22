// Print all numbers between -10 and 19
console.log("Problem 1");
var number = -9;

while (number < 19 && number > -10) {
  console.log(number);
  number++;
}


// problem 2
console.log("Problem 2");
var number = 10;

 while (number >= 10 && number <=40) {
   if ( number % 2 == 0){
     console.log(number);
   }
   number++;
 }

//problem 3

console.log("Problem 3");
var number = 300;

 while (number >= 300 && number <=333) {
   if (number % 2 != 0){
     console.log(number);
   }
  number++;
 }

// Problem 4

console.log("Problem 4");
var number = 5;

 while (number >= 5 && number <= 50) {
   if ((number % 5 == 0 && number % 3 == 0)) {
     console.log(number);
   }
  number++;
 }
