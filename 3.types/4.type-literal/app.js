"use strict";
//literal type = strictly defines what the data should be when it could be two or more different values.
// +{input} -> converts to a number
function combine3(input1, input2, resultCoversion // literal example
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
var combineAges3 = combine3(30, 55, "as-number");
console.log(combineAges);
var combineStrings3 = combine3("30", "55", "as-number");
console.log(combineAges);
var combineNames3 = combine3("Sam", "Acacia", "as-string");
console.log(combineNames);
