"use strict";
// void - used when a function does not return a value.
function add(n1, n2) {
    return n1 + n2;
}
//void example below
function logResult(num) {
    console.log("Result " + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
logResult(add(5, 12));
// Assign type function to prevent a function being re-assigned to something different. Defined by default as "Function"
// Function types describe the parameters and the return value of that function. ({a: type},{b: type}) => {result: type}
var combineValues;
combineValues = add;
// combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
