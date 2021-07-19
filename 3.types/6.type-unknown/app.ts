let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// To allow for userName to be asssigned to userInput -> the type needs to be checked.
if (typeof userInput === "string") {
  userName = userInput;
}
