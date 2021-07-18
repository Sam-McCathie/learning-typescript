// Commented out to remove some ts errors.
// Vanilla .js solution
const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");

function add(num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else return +num1 + +num2;
}

button.addEventListener("click", function () {
  console.log(add(input1.value, input2.value)); // Correctly adds numbers
});

//

// Initial example
// const button = document.querySelector("button");
// const input1 = document.getElementById("num1");
// const input2 = document.getElementById("num2");

// function add(num1, num2) {
//   return num1 + num2;
// }

// button.addEventListener("click", function () {
//   console.log(add(input1.value, input2.value)); // Result - treats inputs as string and concatinates them instead of adding them.
// });
