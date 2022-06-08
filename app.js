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