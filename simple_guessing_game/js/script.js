// Print all numbers between -10 and 19
console.log("Problem 1");
var number = -10;

while (number < 19) {
  console.log(number);
  number++;
}

// problem 2
console.log("Problem 2");
var numbers = 10;

while (number < 40) {
  if( numbers % Math.sqrt(numbers) === 0) {
    console.log(numbers);
    numbers++;
  }
}
