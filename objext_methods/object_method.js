// In JavaScript, default object methods refer to functions that are part of an object, which can either be defined as regular methods or use the new shorthand introduced in ES6. Here's how you define them:

// 1. Defining Regular Object Methods:

const obj = {
  name: "John",
  
  // Regular method
  greet: function() {
    console.log("Hello, " + this.name);
  }
};

obj.greet(); // Output: Hello, John
// 2. ES6 Shorthand for Methods:
// In ES6, you can define methods without the function keyword:


const obj = {
  name: "John",
  
  // ES6 shorthand method
  greet() {
    console.log("Hello, " + this.name);
  }
};

obj.greet(); // Output: Hello, John
// 3. Using Default Parameters in Methods:
// You can also set default values for parameters in object methods:


const obj = {
  name: "John",
  
  // Method with default parameter
  greet(greeting = "Hello") {
    console.log(greeting + ", " + this.name);
  }
};

obj.greet();          // Output: Hello, John
obj.greet("Hi");      // Output: Hi, John
// This flexibility allows methods to handle missing arguments gracefully with default values.






// You said:
// list of default methods of object in js 

// In JavaScript, every object inherits a set of default methods from the Object prototype. These methods are available on all objects unless they are overridden. Below is a list of commonly used default methods of an object in JavaScript:

// 1. Object.prototype.constructor
// Returns a reference to the object's constructor function.
2. Object.prototype.hasOwnProperty(property)
// Checks if the object has the specified property as its own (not inherited) property.

const obj = { name: "John" };
obj.hasOwnProperty("name"); // true
3. Object.prototype.isPrototypeOf(object)
// Checks if the object exists in the prototype chain of another object.

function Animal() {}
const dog = new Animal();
Animal.prototype.isPrototypeOf(dog); // true
4. Object.prototype.propertyIsEnumerable(property)
// Checks if the specified property is enumerable.

const obj = { name: "John" };
obj.propertyIsEnumerable("name"); // true
5. Object.prototype.toString()
// Returns a string representation of the object.

const obj = { name: "John" };
obj.toString(); // "[object Object]"
6. Object.prototype.valueOf()
// Returns the primitive value of the object.

const obj = { name: "John" };
obj.valueOf(); // { name: "John" }
7. Object.prototype.toLocaleString()
// Returns a localized string representation of the object. Often overridden by specific object types (like Date or Number).

const date = new Date();
date.toLocaleString(); // "10/11/2024, 1:00:00 PM"
8. Object.prototype.defineGetter() (Deprecated)
Defines a getter function for a property.
9. Object.prototype.defineSetter() (Deprecated)
Defines a setter function for a property.
10. Object.prototype.__proto__
Points to the prototype of the object. It’s deprecated in favor of Object.getPrototypeOf() and Object.setPrototypeOf().

const obj = { name: "John" };
obj.__proto__ === Object.prototype; // true
11. Object.prototype.__defineGetter__() (Deprecated)
Associates a function with a property to be called when that property is read.
12. Object.prototype.__defineSetter__() (Deprecated)
Associates a function with a property to be called when an attempt is made to set that property.
13. Object.prototype.__lookupGetter__()
Returns the function bound as a getter for a specified property.
14. Object.prototype.__lookupSetter__()
Returns the function bound as a setter for a specified property.
