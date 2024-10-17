// In JavaScript, the spread and rest operators are both represented by ... (three dots), but they are used in different contexts and serve distinct purposes. Here’s a breakdown of both:

// 1. Spread Operator (...)
// The spread operator is used to spread the elements of an iterable (like an array, string, or object) into individual elements. It’s helpful for tasks like array manipulation, object copying, and function arguments.

// Common Use Cases of the Spread Operator:

// Copying arrays: Creates a shallow copy of an array.
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copies arr1 into arr2
console.log(arr2); // [1, 2, 3]

// Merging arrays: Combines multiple arrays into one.
const arr1 = [1, 2];
const arr2 = [3, 4];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4]

// Passing arguments to a function: Spreads an array into individual function arguments.
const numbers = [1, 2, 3];
const sum = (a, b, c) => a + b + c;
console.log(sum(...numbers)); // 6

// Copying objects: Creates a shallow copy of an object.
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // Copies obj1 and adds new properties
console.log(obj2); // { a: 1, b: 2, c: 3 }

// The rest operator is used to collect multiple elements into a single array or object. It’s mainly used in function parameter handling and destructuring assignments.

// Common Use Cases of the Rest Operator:
// Function parameters: Gathers all remaining arguments into an array.

function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// Destructuring arrays: Captures the rest of the elements in an array after some elements are extracted.
const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest); // [2, 3, 4]

// Destructuring objects: Captures the remaining properties in an object.
const { a, ...restObj } = { a: 1, b: 2, c: 3 };
console.log(a); // 1
console.log(restObj); // { b: 2, c: 3 }

// Key Differences:
// Spread expands an iterable (array/object) into individual elements.
// Rest collects multiple elements into a single entity (array or object).
