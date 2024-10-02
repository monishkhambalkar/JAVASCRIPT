// ------ **** Scope **** -------------
// Scope: var is function-scoped. It means if you declare a variable with var inside a function, it is available throughout the function, but not outside. If declared outside of a function, it is globally scoped.

// functional scope

// var y = 20;

// function varExample() {
//   console.log(x);
//   var x = 10;
//   console.log(x);
// }
// varExample();

// calling out side of function
//console.log(x);   //ReferenceError: x is not defined

//console.log(y); // 20

// ------ **** Hoisting **** -------------
// Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their respective scopes (global or function scope) during the compilation phase, before the code is executed. However, only the declaration is hoisted, not the initialization.

// How var Hoisting Works
// For var, when the JavaScript engine encounters a var declaration, it "hoists" the declaration to the top of the scope but leaves the initialization where it originally appears. This results in variables being declared but uninitialized until the point in the code where they are assigned a value.

// Example of Hoisting with var
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5

// What is happening internally?
// During compilation: The declaration var x; is hoisted to the top of the scope (in this case, global scope).
// During execution: The code runs line by line. Initially, x is undefined, and only when the code reaches x = 5 does it assign the value.

// So effectively, the code is interpreted like this:
var x; // Hoisted declaration
console.log(x); // undefined (because only declaration was hoisted)
x = 5; // Initialization happens here
console.log(x); // 5

// Diagram of var Hoisting:
// +--------------------------------+
// |       Compilation Phase        |
// +--------------------------------+
// | var x;                         |
// | (only declaration hoisted)     |
// +--------------------------------+
// |
// | (Execution Phase starts)
// |
// V
// +---------------------------------+
// | console.log(x);  // undefined   |  (x is hoisted but not yet initialized)
// +---------------------------------+
// | x = 5;           // assignment  |
// +---------------------------------+
// | console.log(x);  // 5           |  (now x is initialized)
// +---------------------------------+

// Step-by-Step Breakdown:

// Compilation Phase:
// The JavaScript engine hoists the declaration of x to the top, so var x; is processed before any code is executed. However, the initialization x = 5 remains where it is.
// At this point, x exists, but it's undefined because only the declaration is hoisted, not the value assignment.

// Execution Phase:
// When the code starts executing:
// The first console.log(x) tries to access x, which has been declared but not initialized, so it prints undefined.
// Then, x = 5; assigns the value 5 to x.
// The second console.log(x) prints 5, since x is now initialized.

// Comparison with let and const:
// Unlike var, variables declared with let and const are also hoisted but not initialized. This results in a ReferenceError if they are accessed before the declaration line (this phase is called the Temporal Dead Zone).

// Example with let:

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // Output: 10
// For let, the engine knows y exists (because it is hoisted), but it is not accessible until after the declaration. This is why you get a ReferenceError instead of undefined.

// ------ **** Reassignability **** -------------

// Reassignability: You can reassign and re-declare a var variable in the same scope without error.

var b = 100;
b = 200;
console.log(b);
