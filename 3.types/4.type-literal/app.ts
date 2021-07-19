//literal type = strictly defines what the data should be when it could be two or more different values.
// +{input} -> converts to a number

function combine(
  input1: number | string,
  input2: number | string,
  resultCoversion: "as-number" | "as-string" // literal example
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
