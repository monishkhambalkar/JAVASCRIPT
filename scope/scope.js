//In JavaScript, scope refers to the accessibility of variables, functions, and objects at various parts of your code It determines where in the code you can access or use a particular variable or function.

//There are two main types of scope in JavaScript:

//Global Scope
// Variables declared outside any function or block have global scope.

// They can be accessed from anywhere in the code.
let globalVar = "I'm global";

function printGlobalVar() {
  console.log(globalVar); // Accessible inside the function
}

printGlobalVar(); // Output: I'm global
console.log(globalVar); // Output: I'm global

// /---------------------*****---------------------------

// Local Scope

// Variables declared within a function or block are local to that function or block and cannot be accessed outside of it.

// Function Scope

// Variables declared with var inside a function are function-scoped, meaning they are accessible throughout the function but not outside of it.
function myFunction() {
  var localVar = "I'm local";
  console.log(localVar); // Output: I'm local
}

myFunction();
//console.log(localVar); // Error: localVar is not defined

// Block Scope

// Variables declared with let or const are block-scoped. They are only accessible within the block {} in which they are defined.
if (true) {
  let letBlockVar = "I'm block-scoped let";
  var varBlockVar = "I'm block-scoped var";
  console.log(letBlockVar); // Output: I'm block-scoped
}

//console.log(letBlockVar); // Error: blockVar is not defined

console.log(varBlockVar); // I'm block-scoped var

// --------------****************----------------------------------

// Lexical Scope
// Lexical (or static) scope means that a function's scope is determined by its location in the source code. Functions can access variables from their outer scope, even after they are executed.

function outer() {
  let outerVar = "I'm outer";

  function inner() {
    console.log(outerVar); // Accessing outerVar
    var innerVar = "InnerVar";
  }
  //console.log(innerVar);   // ReferenceError: innerVar is not defined
  return inner;
}

const innerFunc = outer();
innerFunc(); // Output: I'm outer

// -----------------*******************------------------------

// Closures
// Closures occur when a function retains access to its outer scope even after the outer function has finished execution.
function counter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const increment = counter();
increment(); // Output: 1
increment(); // Output: 2

// Summary of Scope Types:
// Global Scope: Variables are accessible anywhere in the code.
// Function Scope: Variables declared with var inside functions are scoped to that function.
// Block Scope: Variables declared with let and const are confined to the block where they are defined.
// Lexical Scope: Functions can access variables from their outer lexical environment.
// Closures: Functions can "remember" the scope in which they were created.
// Each type of scope helps organize and protect data within different sections of your JavaScript code.
