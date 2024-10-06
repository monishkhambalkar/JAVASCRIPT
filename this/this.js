// The this keyword in JavaScript can be tricky because its value depends on how a function is called. Here's a detailed explanation from basic to advanced:

// 1. Basic Understanding of this
// In JavaScript, this is a keyword that refers to the context in which the function is executed. The value of this changes depending on how the function is invoked.

// Global Context
// In the global execution context (outside any function), this refers to the global object.

// In a browser, the global object is window.
// In Node.js, the global object is global.

console.log(this); // Refers to window in a browser or global in Node.js

// Function Context
// When this is used inside a regular function, it refers to the global object (non-strict mode) or undefined (in strict mode).

// Non-strict mode:

function showThis() {
  console.log(this); // Refers to window/global object
}
showThis();

// Strict mode:
("use strict");
function showThis() {
  console.log(this); // Refers to undefined
}
showThis();

// Object Context
// When a function is called as a method of an object, this refers to the object the method is called on.

// Example:

const person = {
  name: "John",
  sayName: function () {
    console.log(this.name); // 'this' refers to 'person'
  },
};

person.sayName(); // Output: John

// this in Arrow Functions
// Arrow functions behave differently from regular functions. They do not have their own this value; instead, they inherit this from the surrounding lexical context.

// Example:

const person = {
  name: "John",
  sayName: function () {
    const innerFunc = () => {
      console.log(this.name); // 'this' refers to 'person' because arrow functions inherit 'this'
    };
    innerFunc();
  },
};

person.sayName(); // Output: John

// this with Constructors (Using new)
// When you use a function as a constructor with the new keyword, this refers to the newly created object.

// Example:

function Car(model) {
  this.model = model;
}

const myCar = new Car("Toyota");
console.log(myCar.model); // Output: Toyota

// this in Event Handlers
// When used in an event handler, this refers to the DOM element that triggered the event.

// Example:

const button = document.querySelector("button");

button.addEventListener("click", function () {
  console.log(this); // Refers to the button element
});

// Explicit Binding of this
// You can explicitly control the value of this using the following methods:

// call()
// call() allows you to invoke a function with a specific this value.

// Example:

function greet() {
  console.log(this.name);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greet.call(person1); // Output: Alice
greet.call(person2); // Output: Bob

// apply()
// apply() is similar to call(), but it takes an array of arguments.

function greet(greeting) {
  console.log(greeting + ", " + this.name);
}

const person = { name: "Alice" };
greet.apply(person, ["Hello"]); // Output: Hello, Alice

// bind()
// bind() creates a new function with this permanently bound to a specific object.

function greet() {
  console.log(this.name);
}

const person = { name: "Alice" };
const boundGreet = greet.bind(person);

boundGreet(); // Output: Alice

// this in Classes
// In ES6 classes, this refers to the current instance of the class.

class Car {
  constructor(model) {
    this.model = model;
  }

  showModel() {
    console.log(this.model);
  }
}

const myCar = new Car("Tesla");
myCar.showModel(); // Output: Tesla

// Summary
// Global context: this refers to the global object (window in browsers).
// Object context: this refers to the object the method is called on.
// Arrow functions: this refers to the surrounding lexical context.
// Constructors: this refers to the new object being created.
// Event handlers: this refers to the element that triggered the event.
// Explicit binding: this can be explicitly set with call(), apply(), or bind().
// Mastering this is critical for writing clear, predictable code, especially in object-oriented and functional programming contexts in JavaScript.
