// JavaScript Objects: A Comprehensive Guide from Basic to Advanced
// Objects are a fundamental concept in JavaScript. They are collections of properties, where each property is associated with a key (also called a name or identifier) and a value. Let's dive into JavaScript objects from basic concepts to advanced features.

// 1. Basic Concepts of Objects
// 1.1. Creating Objects
// There are several ways to create objects in JavaScript:

// Object Literal Syntax:
const person = {
  name: "John",
  age: 30,
};
// Using new Object() Syntax:
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
//Using a Constructor Function:
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const john = new Person("John", 30);
// 1.2. Accessing Object Properties
// Properties can be accessed using either dot notation or bracket notation:
// Dot Notation:

console.log(person.name); // 'John'

// Bracket Notation:
console.log(person["age"]); // 30

// 2. Intermediate Concepts
// 2.1. Methods in Objects
// A method is a function stored as a property in an object:

const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // 'Hello, my name is John'

// 2.2. this Keyword
// In methods, this refers to the object on which the method is called:

const car = {
  brand: "Tesla",
  showBrand: function () {
    console.log(this.brand);
  },
};

car.showBrand(); // 'Tesla'

// 2.3. Dynamic Property Names
// You can use variables as dynamic property names:

let prop = "color";
const car = {
  brand: "Ford",
  [prop]: "red", // dynamically setting the property
};

console.log(car.color); // 'red'

// 2.4. Object Methods: Object.keys(), Object.values(), Object.entries()
// Object.keys(): returns an array of the object's keys.
// Object.values(): returns an array of the object's values.
// Object.entries(): returns an array of the object's key-value pairs.

const user = { name: "Alice", age: 25 };
console.log(Object.keys(user)); // ['name', 'age']
console.log(Object.values(user)); // ['Alice', 25]
console.log(Object.entries(user)); // [['name', 'Alice'], ['age', 25]]

// 3. Advanced Concepts
// 3.1. Object Constructors and Prototypes
// You can create objects using constructors and share methods using prototypes:
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(`This is a ${this.type}`);
};

const cat = new Animal("cat");
cat.speak(); // 'This is a cat'

// Here, speak is shared among all instances of Animal via the prototype.

// 3.2. Classes (ES6)
// Classes provide a cleaner syntax for creating objects and managing inheritance:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person("Alice", 25);
alice.greet(); // 'Hello, my name is Alice'

// 3.3. Inheritance in JavaScript
// Inheritance allows one object (or class) to inherit properties and methods from another.

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(`${this.type} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, "Dog"); // Call the parent constructor
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
Dog.prototype.constructor = Dog;

const dog = new Dog("Max");
dog.speak(); // 'Dog makes a sound.'

// Using ES6 Classes:

class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`${this.type} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super("Dog"); // Call the parent constructor
    this.name = name;
  }
}

const max = new Dog("Max");
max.speak();

// 3.4. Object Destructuring
// Destructuring allows you to extract properties from an object and assign them to variables:

const user = { name: "Alice", age: 25 };
const { name, age } = user;
console.log(name); // 'Alice'
console.log(age); // 25

// 3.5. Spread and Rest Operator
// Spread: Copies all properties from one object to another.

const user1 = { name: "Alice" };
const user2 = { ...user1, age: 25 }; // spread operator
console.log(user2); // { name: 'Alice', age: 25 }

// Rest: Gathers remaining properties into a new object.
const { name, ...rest } = { name: "Alice", age: 25, location: "NY" };
console.log(rest); // { age: 25, location: 'NY' }

// 3.6. Object Freezing and Sealing
// Object.freeze(): Prevents modifications (no adding, deleting, or changing properties).
// Object.seal(): Allows modifying existing properties but prevents adding or removing properties.

const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // Fails silently in strict mode
console.log(obj.prop); // 42

// 3.7. Getters and Setters
// Getters and setters allow you to define how to access and modify object properties:?

const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  },
};

person.fullName = "Jane Smith";
console.log(person.fullName); // 'Jane Smith'


JavaScript Objects: A Comprehensive Guide from Basic to Advanced
Objects are a fundamental concept in JavaScript. They are collections of properties, where each property is associated with a key (also called a name or identifier) and a value. Let's dive into JavaScript objects from basic concepts to advanced features.

1. Basic Concepts of Objects
1.1. Creating Objects
There are several ways to create objects in JavaScript:

Object Literal Syntax:

javascript
Copy code
const person = {
  name: 'John',
  age: 30
};
Using new Object() Syntax:

javascript
Copy code
const car = new Object();
car.brand = 'Toyota';
car.model = 'Camry';
Using a Constructor Function:

javascript
Copy code
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const john = new Person('John', 30);
1.2. Accessing Object Properties
Properties can be accessed using either dot notation or bracket notation:

Dot Notation:

javascript
Copy code
console.log(person.name); // 'John'
Bracket Notation:

javascript
Copy code
console.log(person['age']); // 30
2. Intermediate Concepts
2.1. Methods in Objects
A method is a function stored as a property in an object:

javascript
Copy code
const person = {
  name: 'John',
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

person.greet(); // 'Hello, my name is John'
2.2. this Keyword
In methods, this refers to the object on which the method is called:

javascript
Copy code
const car = {
  brand: 'Tesla',
  showBrand: function() {
    console.log(this.brand);
  }
};

car.showBrand(); // 'Tesla'
2.3. Dynamic Property Names
You can use variables as dynamic property names:

javascript
Copy code
let prop = 'color';
const car = {
  brand: 'Ford',
  [prop]: 'red' // dynamically setting the property
};

console.log(car.color); // 'red'
2.4. Object Methods: Object.keys(), Object.values(), Object.entries()
Object.keys(): returns an array of the object's keys.
Object.values(): returns an array of the object's values.
Object.entries(): returns an array of the object's key-value pairs.
javascript
Copy code
const user = { name: 'Alice', age: 25 };
console.log(Object.keys(user));   // ['name', 'age']
console.log(Object.values(user)); // ['Alice', 25]
console.log(Object.entries(user)); // [['name', 'Alice'], ['age', 25]]
3. Advanced Concepts
3.1. Object Constructors and Prototypes
You can create objects using constructors and share methods using prototypes:

javascript
Copy code
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function() {
  console.log(`This is a ${this.type}`);
};

const cat = new Animal('cat');
cat.speak(); // 'This is a cat'
Here, speak is shared among all instances of Animal via the prototype.

3.2. Classes (ES6)
Classes provide a cleaner syntax for creating objects and managing inheritance:

javascript
Copy code
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const alice = new Person('Alice', 25);
alice.greet(); // 'Hello, my name is Alice'
3.3. Inheritance in JavaScript
Inheritance allows one object (or class) to inherit properties and methods from another.

Using Prototypes:

javascript
Copy code
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function() {
  console.log(`${this.type} makes a sound.`);
};

function Dog(name) {
  Animal.call(this, 'Dog'); // Call the parent constructor
  this.name = name;
}

Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal
Dog.prototype.constructor = Dog;

const dog = new Dog('Max');
dog.speak(); // 'Dog makes a sound.'
Using ES6 Classes:

javascript
Copy code
class Animal {
  constructor(type) {
    this.type = type;
  }

  speak() {
    console.log(`${this.type} makes a sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super('Dog'); // Call the parent constructor
    this.name = name;
  }
}

const max = new Dog('Max');
max.speak(); // 'Dog makes a sound.'
3.4. Object Destructuring
Destructuring allows you to extract properties from an object and assign them to variables:

javascript
Copy code
const user = { name: 'Alice', age: 25 };
const { name, age } = user;
console.log(name); // 'Alice'
console.log(age);  // 25
3.5. Spread and Rest Operator
Spread: Copies all properties from one object to another.

javascript
Copy code
const user1 = { name: 'Alice' };
const user2 = { ...user1, age: 25 }; // spread operator
console.log(user2); // { name: 'Alice', age: 25 }
Rest: Gathers remaining properties into a new object.

javascript
Copy code
const { name, ...rest } = { name: 'Alice', age: 25, location: 'NY' };
console.log(rest); // { age: 25, location: 'NY' }
3.6. Object Freezing and Sealing
Object.freeze(): Prevents modifications (no adding, deleting, or changing properties).
Object.seal(): Allows modifying existing properties but prevents adding or removing properties.
javascript
Copy code
const obj = { prop: 42 };
Object.freeze(obj);
obj.prop = 33; // Fails silently in strict mode
console.log(obj.prop); // 42
3.7. Getters and Setters
Getters and setters allow you to define how to access and modify object properties:

javascript
Copy code
const person = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

person.fullName = 'Jane Smith'; 
console.log(person.fullName); // 'Jane Smith'
// 3.8. this in Different Contexts
// In JavaScript, this behaves differently depending on the context, especially inside functions, methods, and event handlers.

// Inside a method, this refers to the object.
// In a regular function, this refers to the global object (or undefined in strict mode).
// Arrow functions inherit this from their lexical scope.
// 4. Object-Oriented Programming (OOP) Concepts with Objects
// Encapsulation: Wrapping properties and methods inside an object.
// Inheritance: Using prototypes or extends to inherit features.
// Polymorphism: Methods that behave differently based on the object.
// Abstraction: Hiding complex implementation details behind simpler methods.
// Summary
// JavaScript objects provide a robust way to store and manage data. From basic object creation to advanced features like inheritance, prototypes, and classes, understanding objects is key to writing powerful, scalable JavaScript code. Mastery of these concepts is essential for becoming proficient in JavaScript development.
