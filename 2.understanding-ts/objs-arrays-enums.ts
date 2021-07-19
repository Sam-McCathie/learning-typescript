// Assign type of object with {parameter}: object pr {parameter}: {}
// Data types can be defined inside {name: string; age: number;}

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //Tuple -> Array with a set amount of values -> in this instance and array with the first value as a number and the second is a string.
// } = {
//   name: "Sam",
//   age: 25,
//   hobbies: ["Sports", "Gaming"],
//   role: [6, "Player"],
// };

//Below can be redefined with enums
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

//Called with {Role}.{member} -> Role number values can be redifined with e.g. ADMIN = 5 -> members following will follow the trend. Or you can assign unique numbers to each enum member.
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Sam",
  age: 25,
  hobbies: ["Sports", "Gaming"],
  role: Role.ADMIN,
};

let faveActivities: string[]; // assinging variable to be a string array -> meaning only strings can be stored.
let allActivites: any[]; // any array -> meaning any data type can be stored in the array. -> lose benefits of .ts

console.log(person);
