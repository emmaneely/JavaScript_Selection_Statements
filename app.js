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
  else if (number == favNumber) {
    console.log("Congratulations!!!")
}
  else {
    console.log ("That is not a valid number.")
}

  // Exercise 2
  let birthMonth = window.prompt("What is your birth month?");

  switch (birthMonth.toLowerCase()) {
    case "december":
    case "january":
    case "february":
      console.log("Winter")
      break;
    case "march":
    case "april":
    case "may":
      console.log("Spring")
      break;
    case "june":
    case "july":
    case "august":
      console.log("Summer")
      break;
    case "september":
    case "october":
    case "november":
      console.log("Fall")
      break;
    default:
      console.log("That is not a valid month.")
  }

  // Exercise 3
let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top"
    break;
  case "02":
    type = "T-shirt"
    break;
  case "03":
    type = "Long Sleeve"
    break;
  case "04":
    type = "Sweat Shirt"
    break;
  default:
    type = "Other"
}

switch (colorId) {
  case "BK":
    color = "Black"
    break;
  case "BL":
    color = "Blue"
    break;
  case "RD":
    color = "Red"
    break;
  case "PU":
    color = "Purple"
    break;
  default:
    color = "White"
}

switch (sizeId) {
  case "S":
    size = "Small"
    break;
  case "M":
    size = "Medium"
    break;
  case "L":
    size = "Large"
    break;
  case "XL":
    size = "Extra Large"
    break;
  default:
    size = "One Size Fits All"
}

console.log(`Product: ${size} ${color} ${type}`);