
// In JavaScript, modules allow you to break up your code into separate files for better organization, reuse, and maintenance. Modules encapsulate functionality, making it easier to manage and prevent conflicts between different parts of a codebase.

// Here’s an overview of how modules work in JavaScript:

// 1. Module Concepts
// Encapsulation: Modules contain code (variables, functions, classes) that is self-contained, reducing the chances of naming conflicts.
// Exporting: You define what parts of the module should be accessible to other files using the export keyword.
// Importing: Other modules or files can access the exported functionality using the import keyword.
// 2. Types of JavaScript Modules
// a) ES6 (ECMAScript 2015) Modules
// ES6 modules are natively supported in modern JavaScript environments (browsers and Node.js). The key here is using export and import.
// Example:

Exporting (math.js):


// Named export
export function add(a, b) {
  return a + b;
}

// Default export
export default function subtract(a, b) {
  return a - b;
}
Importing (app.js):


// import subtract, { add } from './math.js';

// console.log(add(5, 3));      // Output: 8
// console.log(subtract(5, 3)); // Output: 2
// b) CommonJS Modules (Node.js)
// CommonJS modules are used in Node.js and rely on module.exports and require to define and load modules.
// Example:

Exporting (math.js):


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
Importing (app.js):


const math = require('./math.js');

console.log(math.add(5, 3));      // Output: 8
console.log(math.subtract(5, 3)); // Output: 2
// 3. Named vs. Default Exports
// Named Export: You can export multiple things from a module.

export const PI = 3.14;
export function calculateCircumference(diameter) {
  return PI * diameter;
}
// Default Export: Each module can have one default export, typically used when the module has a single purpose.

export default function() {
  return "I'm the default export!";
}
// 4. Dynamic Imports
// You can dynamically import modules using import(). This allows modules to be loaded conditionally or on-demand, which can help with performance (e.g., in lazy-loading scenarios).
// Example:


if (condition) {
  import('./math.js').then(module => {
    console.log(module.add(5, 3)); // Output: 8
  });
}
// 5. Module Loading in Browsers
// For browsers, you can use <script type="module"> in your HTML to load JavaScript modules natively.
// Example:


// <script type="module" src="app.js"></script>
// 6. Advantages of Modules
// Code Reusability: You can reuse functions, classes, and variables across different projects or parts of your application.
// Maintainability: Smaller, modular files are easier to manage than large, monolithic files.
// Scope Isolation: Each module has its own scope, avoiding polluting the global scope.
// Summary of Usage
// Use export to expose variables, functions, or classes from a module.
// Use import to bring functionality from one module into another.
// For Node.js, use module.exports and require for CommonJS-style modules.
// ES6 modules are the standard and are widely supported in browsers and modern development environments.