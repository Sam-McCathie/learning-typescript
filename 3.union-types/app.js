//Union types {type} | {type} | {type} can be any type specified
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 55);
console.log(combineAges);
var combineNames = combine("Sam", "Acacia");
console.log(combineNames);
