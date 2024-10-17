// In JavaScript, prototype is a mechanism that allows objects to inherit properties and methods from other objects. Every JavaScript function has a prototype property, which is used to attach methods and properties that should be shared among all instances created by that function (when it is used as a constructor).

// Key Points about Prototypes in JavaScript:
// Every object in JavaScript has a prototype:

// When you create an object using a constructor function, that object inherits properties and methods from the constructor’s prototype.
// Objects created from functions via the new keyword automatically have access to the properties defined on the function’s prototype.
// Prototype Chain:

// When you try to access a property on an object, JavaScript first looks for that property on the object itself. If it doesn’t find it, it looks at the object’s prototype, and so on up the chain (this is called the prototype chain).
// The prototype chain ends at Object.prototype, which is the prototype of all objects.
// Constructor Functions and Prototypes:

// In JavaScript, you can define constructor functions, and then use their prototype property to add methods that are shared across all instances of the objects created using that constructor.

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the prototype
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating instances
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// Accessing prototype method
person1.greet(); // "Hello, my name is Alice and I am 30 years old."
person2.greet(); // "Hello, my name is Bob and I am 25 years old."

// In this example, the greet method is added to the Person prototype, so every instance of Person can call greet without duplicating the method in memory.

// Prototypal Inheritance:
// JavaScript also uses prototypes for inheritance. You can have one constructor function inherit properties from another by setting the prototype.

// Parent constructor
function Animal(type) {
  this.type = type;
}

// Adding a method to Animal's prototype
Animal.prototype.speak = function () {
  console.log(`This ${this.type} makes a sound.`);
};

// Child constructor
function Dog(name) {
  Animal.call(this, "dog"); // Call the Animal constructor
  this.name = name;
}

// Inherit from Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Adding a method specific to Dog
Dog.prototype.bark = function () {
  console.log(`${this.name} barks!`);
};

const myDog = new Dog("Rover");
myDog.speak(); // "This dog makes a sound."
myDog.bark(); // "Rover barks!"

// In this example, the Dog constructor inherits from Animal, so instances of Dog have access to both speak (from Animal) and bark (from Dog).

// Summary
// prototype is used to define shared properties and methods for instances of a constructor.
// The prototype chain allows for inheritance, and it enables one object to inherit properties and methods from another.
