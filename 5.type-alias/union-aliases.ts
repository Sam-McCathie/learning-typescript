//Type alias - store multiple types inside of it so that it can be re-used.

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultCoversion: ConversionDescriptor // literal example
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultCoversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 55, "as-number");
console.log(combineAges);

const combineStrings = combine("30", "55", "as-number");
console.log(combineAges);

const combineNames = combine("Sam", "Acacia", "as-string");
console.log(combineNames);
