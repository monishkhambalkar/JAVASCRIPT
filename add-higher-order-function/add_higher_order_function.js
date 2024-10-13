//A Higher-Order Function (HOF) in JavaScript is a function that can do one or both of the following:

// Take one or more functions as arguments.
// Return a function as a result.
// These functions allow for more abstract and flexible code, enabling composition and reuse of functionality in elegant ways.

// Basic Concept of Higher-Order Functions
// A higher-order function deals with other functions as first-class citizens (i.e., treating them like values). This opens the door to powerful patterns like callback functions, function composition, and currying.

// Here’s a breakdown from basic to advanced, with examples:

// 1. Functions as First-Class Citizens
// In JavaScript, functions are treated like objects, meaning:

// You can store them in variables.
// You can pass them as arguments.
// You can return them from other functions.
// Example:

function greet() {
  return "Hello!";
}

// Storing a function in a variable
let greetFunc = greet;
console.log(greetFunc()); // Output: "Hello!"

// 2. Higher-Order Function (Basic)
// A higher-order function accepts a function as an argument. Here’s a simple example where we pass a function as an argument:
function process(callback) {
  console.log("Processing...");
  callback(); // Executing the callback function passed as an argument
}

function done() {
  console.log("Done!");
}

process(done); // Output: "Processing..." and then "Done!"

// Here, process is a higher-order function because it takes another function (done) as an argument.

// 3. Example with Built-in Higher-Order Functions
// Some commonly used higher-order functions are built into JavaScript, such as:

// Array.prototype.map()
// Array.prototype.filter()
// Array.prototype.reduce()
// Example of .map()

const numbers = [1, 2, 3, 4, 5];

// Using .map to transform each number by multiplying it by 2
const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Here, .map() is a higher-order function because it takes a function (the transformation function) as an argument and applies it to each element in the array.

// Example of .filter()
const numbers = [1, 2, 3, 4, 5];

// Using .filter to return numbers greater than 3
const filtered = numbers.filter(function (number) {
  return number > 3;
});

console.log(filtered); // Output: [4, 5]

// Example of .reduce()

const numbers = [1, 2, 3, 4, 5];

// Using .reduce to sum all numbers in the array
const sum = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0); // 0 is the initial value of the accumulator

console.log(sum); // Output: 15

// 4. Returning Functions from Functions (Advanced)
// A higher-order function can return another function. This pattern is used in currying and function composition.

// Example: Function Returning Another Function

function greet(message) {
  return function (name) {
    console.log(`${message}, ${name}!`);
  };
}

const sayHello = greet("Hello");
sayHello("John"); // Output: "Hello, John!"

// In this example, greet returns another function. We can store the returned function in sayHello and call it later.

// 5. Currying (Advanced Concept)
// Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument.

// Example: Currying

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5)); // Output: 10

const multiplyBy3 = multiply(3);
console.log(multiplyBy3(5)); // Output: 15

// Here, multiply is a curried function. It returns a new function that takes the second argument.

// 6. Function Composition (Advanced Concept)
// Function composition is the process of combining two or more functions to produce a new function.

// Example: Function Composition
function addTwo(x) {
  return x + 2;
}

function multiplyByThree(x) {
  return x * 3;
}

function compose(f, g) {
  return function (x) {
    return f(g(x));
  };
}

const addAndMultiply = compose(addTwo, multiplyByThree);
console.log(addAndMultiply(5)); // Output: 17

// Here, compose is a higher-order function that combines addTwo and multiplyByThree to produce a new function that first multiplies by three, then adds two.

// 7. Callback Functions
// A callback is a function passed into another function as an argument and executed later.

// Example: Callback with setTimeout

function sayHi() {
  console.log("Hi there!");
}

// Passing a function as a callback to setTimeout
setTimeout(sayHi, 1000); // Output after 1 second: "Hi there!"

// Callbacks are heavily used in asynchronous operations, such as timers, promises, and event handling.

// 8. Promise with Higher-Order Functions (Advanced)
// JavaScript promises are a modern way to handle asynchronous operations, and .then() is an example of a higher-order function.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved!"), 1000);
});

// Using a function passed into .then() to handle the resolved value
promise.then((message) => {
  console.log(message); // Output after 1 second: "Resolved!"
});

// Summary
// Higher-order functions allow you to pass functions as arguments or return them.
// They promote code reuse and enable powerful abstractions like callbacks, currying, and composition.
// Some commonly used built-in higher-order functions are .map(), .filter(), and .reduce().
// Higher-order functions are fundamental for writing clean, concise, and maintainable code in JavaScript. Understanding and mastering them will allow you to write more modular and reusable code.
