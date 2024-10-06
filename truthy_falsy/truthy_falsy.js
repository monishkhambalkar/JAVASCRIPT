// In JavaScript, truthy and falsy values are used to determine how non-boolean values are interpreted in a boolean context (e.g., inside an if statement or as the condition in loops).

// Falsy Values
// A falsy value is one that is considered false when evaluated in a boolean context. There are only 6 falsy values in JavaScript:

// false - the boolean false
// 0 - the number zero
// "" - an empty string (both single and double quotes)
// null - the absence of any value
// undefined - a variable that has been declared but not assigned a value
// NaN - "Not-a-Number", usually the result of an invalid mathematical operation
// Truthy Values
// A truthy value is any value that is not falsy. This includes:

// Non-zero numbers (e.g., 1, -42, 3.14)
// Non-empty strings (e.g., "hello", 'false')
// Objects (including arrays, functions, and other non-primitive types)
// The boolean true
// Example of Truthy and Falsy in Conditional Statements:

if (0) {
  console.log("This will not run because 0 is falsy.");
} else {
  console.log("This will run because 0 is falsy.");
}

if ("hello") {
  console.log("This will run because 'hello' is truthy.");
}

if (null) {
  console.log("This won't run because null is falsy.");
} else {
  console.log("This will run because null is falsy.");
}

//In summary, falsy values behave as false in conditional checks, and everything else is truthy.
