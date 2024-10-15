// Hoisting in JavaScript is a behavior where variable and function declarations are moved, or "hoisted," to the top of their containing scope (either the global scope or function scope) before the code executes. However, only the declarations are hoisted, not the initializations. This means that you can use a variable or function before it is declared, but the value of the variable will be undefined until it is assigned.

// Key Concepts:
// Variable Hoisting: Variables declared with var are hoisted to the top of their scope, but they are initialized with undefined. Variables declared with let and const are also hoisted, but they are not initialized until the code execution reaches the line where they are declared (they are in a "temporal dead zone" before their declaration is reached).

// Function Hoisting: Function declarations are fully hoisted. This means the entire function is hoisted, and you can call the function before it is defined in the code. However, function expressions (where functions are assigned to variables) behave differently and are hoisted like variables.

// Hoisting with var
// When a variable is declared with var, the declaration is hoisted, but its assignment happens in place. The variable will have a value of undefined until it is assigned a value later in the code.

console.log(myVar); // Output: undefined (the declaration is hoisted, but not the value)

var myVar = 10; // Assignment happens here

console.log(myVar); // Output: 10

// Explanation:

// In the first console.log, the variable myVar is hoisted but not initialized, so it prints undefined.
// After the assignment, myVar gets the value 10.
// Hoisting with let and const
// Variables declared with let and const are hoisted but not initialized, so trying to access them before their declaration results in a ReferenceError.

console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization

let myLet = 20; // Declaration and assignment

console.log(myLet); // Output: 20

// Explanation:

// Unlike var, let and const do not get initialized with undefined. If you try to access them before the line of declaration, it results in an error due to the temporal dead zone.
// Function Hoisting
// Function declarations are fully hoisted, meaning the entire function is available before its declaration in the code.

myFunction(); // Output: "Hello from hoisted function!"

function myFunction() {
  console.log("Hello from hoisted function!");
}

// Explanation:

// In the case of function declarations, the entire function definition is hoisted to the top, so you can call myFunction even before its definition.
// Hoisting with Function Expressions
// When functions are defined as expressions (assigned to variables), they behave like variable hoisting. Only the variable declaration is hoisted, not the function itself.

myFunction(); // TypeError: myFunction is not a function

var myFunction = function () {
  console.log("This is a function expression.");
};

myFunction(); // Output: "This is a function expression."

// Explanation:

// The variable myFunction is hoisted as undefined. When you try to call it before the assignment, you get a TypeError because undefined is not a function.
// After the assignment, the function can be called as expected.
// Temporal Dead Zone (TDZ)
// For let and const, there is a Temporal Dead Zone (TDZ) from the start of the block until the point where the variable is declared. In the TDZ, any attempt to access the variable results in a ReferenceError.
{
  console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization

  const myConst = 30;
  console.log(myConst); // Output: 30
}

// Explanation:

// myConst is in the TDZ until its declaration, so the first console.log results in a ReferenceError.
// Conclusion
// var is hoisted and initialized with undefined, so it can be accessed before its declaration but will be undefined.
// let and const are hoisted but not initialized, so accessing them before declaration results in a ReferenceError.
// Function declarations are hoisted completely, meaning they can be invoked before their declaration.
// Function expressions behave like variables: the declaration is hoisted, but the function itself is not.
// By understanding hoisting, you can avoid potential bugs and better predict how your code will behave.
