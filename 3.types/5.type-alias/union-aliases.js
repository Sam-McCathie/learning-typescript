"use strict";
//Type alias - store multiple types inside of it so that it can be re-used.
function combine(input1, input2, resultCoversion // literal example
) {
    var result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultCoversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 55, "as-number");
console.log(combineAges);
var combineStrings = combine("30", "55", "as-number");
console.log(combineAges);
var combineNames = combine("Sam", "Acacia", "as-string");
console.log(combineNames);
