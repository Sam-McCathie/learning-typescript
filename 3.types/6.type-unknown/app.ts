let userInput4: unknown;
let userName4: string;

userInput = 5;
userInput = "Max";
// To allow for userName to be asssigned to userInput -> the type needs to be checked.
if (typeof userInput4 === "string") {
  userName4 = userInput4;
}
