//create secretNumber
var secretNumber = 4;
// ask user to Guessing
var guess = Number(prompt("Guess a number?"));
alert(guess);
// check guess
if(guess === secretNumber) {
  alert("you got it write");
}
// check if number is higher
else if(guess > secretNumber) {
  alert("too high");
}
// check if number is too low
else{
  alert("too low");
}
// if you got it wrong
