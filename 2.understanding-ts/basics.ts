// Core data types
// "{parameter}:{data type}" -> here I'm defining the argument specifically as a number and not any type.

function add3(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
  return n1 + n2;
}

// TypeScript can detect the variable type so data types do not need to be added here -> it is also not best practice.
// ONLY add a type when data is initialised with no value.
// You will throw an error if one data type is updated to another.
const number1 = 5;
const number2 = 6.5;
const printResult = true;
const resultPhrase = "The result is ";

const result = add3(number1, number2, printResult, resultPhrase);
