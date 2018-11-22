var age = prompt("Enter you age to find out how many days you've have been alive");

if(age < 0) {
  console.log("error");
}
  else if(age === 21) {
    console.log("Happy 21st birthday");
  }

  else if(age % 2 !== 0) {
    console.log("Your age is odd!");
  }
  else if(age * Math.sqrt(age) === 0) {
    console.log("Perfect Square!");
  }
