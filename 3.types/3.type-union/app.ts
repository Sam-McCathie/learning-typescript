//Union types {type} | {type} | {type} can be any type specified
function combine2(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges2 = combine2(30, 55);
console.log(combineAges);

const combineNames2 = combine2("Sam", "Acacia");
console.log(combineNames);
