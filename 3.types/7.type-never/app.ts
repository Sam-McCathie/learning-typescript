let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// never returns anything
function generateError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

generateError("An error occured!", 500);
