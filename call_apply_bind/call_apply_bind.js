// In JavaScript, call(), bind(), and apply() are methods that allow you to change the context (this) of a function when it is called. Here's a breakdown of each:

// 1. call()
// The call() method is used to invoke a function with a specified this value and arguments provided individually.

func.call(thisArg, arg1, arg2, ...);

// thisArg: The value of this inside the function.
// arg1, arg2, ...: Arguments that are passed to the function.


function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person = { name: "John" };
  greet.call(person, "Alice");  // Output: Hello, Alice! My name is John.

  
  function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person = { name: "John" };
  greet.call(person, "Alice");  

//   apply()
// The apply() method is similar to call(), but the arguments are passed as an array (or array-like object).
// Syntax:


func.apply(thisArg, [arg1, arg2, ...]);

// thisArg: The value of this inside the function.
// [arg1, arg2, ...]: An array or array-like object containing the arguments to be passed to the function.

function greet(name, age) {
    console.log(`Hello, ${name}! I am ${age} years old, and my name is ${this.name}.`);
  }
  
  const person = { name: "John" };
  greet.apply(person, ["Alice", 30]);  // Output: Hello, Alice! I am 30 years old, and my name is John.


//   . bind()
// The bind() method is used to create a new function that, when called, has its this value set to the provided thisArg, and its arguments set to the provided arguments, followed by any additional arguments passed to the bound function.
// Unlike call() and apply(), bind() does not execute the function immediately. It returns a new function with the specified this value and arguments.

const boundFunc = func.bind(thisArg, arg1, arg2, ...);

// thisArg: The value of this inside the function.
// arg1, arg2, ...: Arguments to be prepended to the function when it is invoked.

function greet(name) {
    console.log(`Hello, ${name}! My name is ${this.name}.`);
  }
  
  const person = { name: "John" };
  const boundGreet = greet.bind(person);
  boundGreet("Alice");  // Output: Hello, Alice! My name is John.

  
//   Key Differences:
// call() and apply(): Immediately invoke the function, but with call(), the arguments are passed individually, while with apply(), the arguments are passed as an array.
// bind(): Does not immediately invoke the function; instead, it returns a new function that can be called later with a fixed this and initial arguments.
// These methods are useful when working with functions in different contexts and can help with reusing functions or adjusting their behavior.
  