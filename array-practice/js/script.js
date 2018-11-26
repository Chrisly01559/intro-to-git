var list = [];

var input = prompt("Enter something to store in the list.");

while (input !== "quit"){
  if(input === "add") {
      listAdd();
      console.log("Added to list")
    }
  else if(input === "list"){
    showList();
  }
  input = prompt("Enter something to store in the list.");
}
console.log("Quit");



//function to add to array list

function listAdd() {
  var addToList = prompt("Enter variable to add to list.");
  list.push(addToList);
}
//show all variables in array list
function showList(){
  console.log("--------------")
  list.forEach(function (list, i) {
    console.log(i + ": " + list);
  });
  console.log("--------------")
}
