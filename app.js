console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
var favNumber = 33;

let number = window.prompt("Please enter a number.");

if (number < favNumber) {
  console.log("too low");
} else if (number > favNumber) {
  console.log("too high");
}
  else {
    console.log ("Congratulations!!!")
  }

  // Exercise 2
  let birthMonth = window.prompt("What is your birth month?");

  switch (birthMonth) {
    case "December":
    case "January":
    case "February":
      console.log("Winter")
      break;
    case "March":
    case "April":
    case "May":
      console.log("Spring")
      break;
    case "June":
    case "July":
    case "August":
      console.log("Summer")
      break;
    case "September":
    case "October":
    case "November":
      console.log("Fall")
      break;
    default:
      console.log("That is not a valid month.")
  }