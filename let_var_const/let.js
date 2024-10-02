//------------***** Reassignability *****---------------

// let a = 100;
// a = 200;

// console.log(a);

//------------***** Scope *****---------------

// Scope: let is block-scoped. It is only available within the block in which it is defined (e.g., inside curly braces {}). A block can be a function, a loop, or any code enclosed in {}.
function letExample() {
  // console.log(y); // ReferenceError: Cannot access 'y' before initialization
  let y = 20; // variable declared and initialized
  console.log(y); // 20

  if (true) {
    let y = 30; // new block-scoped variable (doesn't affect outer y)
    console.log(y); // 30
  }

  console.log(y); // 20 (original y remains unchanged)   //because this is out of the scope
}

letExample();

//------------***** Hoisting *****---------------

// When you declare a variable using let, it is also hoisted, but unlike var, the variable remains uninitialized until the code execution reaches the line where the let declaration occurs. Attempting to access the variable before its declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).

// Temporal Dead Zone (TDZ)
// The TDZ is the period between the start of the scope (e.g., the function, block, or module) and the point where the variable is initialized. During this time, the variable exists but cannot be accessed.

// Example of let Hoisting and Temporal Dead Zone:

// console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 10;
// console.log(y); // Output: 10
// What is happening internally?
// During compilation: The declaration of let y; is hoisted to the top of the block, but the variable remains in the TDZ until the code reaches the line let y = 10;.
// During execution: If you try to access y before its initialization, the JavaScript engine throws a ReferenceError. Once the declaration line is reached, y is initialized with the value 10, and you can access it normally after that.
// Effectively, the code is interpreted like this:

// // TDZ starts
// let y;  // Declaration hoisted but not initialized
// // TDZ ends
// console.log(y);  // ReferenceError because y is still in the TDZ
// y = 10;          // Now y is initialized
// console.log(y);  // 10
// Diagram of let Hoisting with Temporal Dead Zone:
// lua
// Copy code
// +---------------------------------------+
// |       Compilation Phase               |
// +---------------------------------------+
// | let y;                                |
// | (hoisted declaration, but no value)   |
// +---------------------------------------+
// |
// | (Execution Phase starts)
// |
// V
// +----------------------------------------+
// | console.log(y);  // ReferenceError     |  (y is in the TDZ)
// +----------------------------------------+
// | y = 10;            // initialization   |  (y is initialized here)
// +----------------------------------------+
// | console.log(y);    // 10               |  (y is now accessible)
// +----------------------------------------+
// Step-by-Step Breakdown:
// Compilation Phase:

// The JavaScript engine recognizes the declaration let y; and hoists it to the top of the block.
// However, y is placed into the Temporal Dead Zone because it hasn't been initialized yet. The variable exists in memory, but you cannot use it until after its declaration.
// Execution Phase:

// First console.log(y);: At this point, the variable y is still in the TDZ, so trying to access it results in a ReferenceError.
// y = 10;: This line initializes the variable y, and the TDZ ends. From this point forward, y is no longer in the TDZ and can be accessed normally.
// Second console.log(y);: The variable y now holds the value 10, so the console outputs 10.
// Key Difference with var:
// With var, the variable is hoisted and initialized to undefined, meaning you can access it before its declaration, but it will give undefined. With let, the variable is hoisted but not initialized, so accessing it before the declaration results in a ReferenceError.
