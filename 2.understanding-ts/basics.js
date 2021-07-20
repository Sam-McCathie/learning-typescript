"use strict";
// Core data types
// "{parameter}:{data type}" -> here I'm defining the argument specifically as a number and not any type.
function add3(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    return n1 + n2;
}
// TypeScript can detect the variable type so data types do not need to be added here -> it is also not best practice.
// ONLY add a type when data is initialised with no value.
// You will throw an error if one data type is updated to another.
var number1 = 5;
var number2 = 6.5;
var printResult = true;
var resultPhrase = "The result is ";
var result = add3(number1, number2, printResult, resultPhrase);
