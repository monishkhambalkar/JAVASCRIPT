//------------***** Reassignability *****---------------
//Reassignability: A const variable cannot be reassigned once it has been declared. However, if the variable is an object or array, the properties or elements inside it can be modified.

//const a = 30;
//a = 20;   //TypeError: Assignment to constant variable.

// console.log(a);

//------------***** Scope *****---------------

// function constExample() {
//   const z = 50; // variable declared and initialized
//   console.log(z); // 50

//   // z = 60;        // TypeError: Assignment to constant variable

//   const obj = { a: 1 };
//   obj.a = 10; // allowed because the object reference is constant, but properties can change
//   console.log(obj); // { a: 10 }

//   const arr = [1, 2, 3];
//   arr.push(4); // allowed, we can modify array elements
//   console.log(arr); // [1, 2, 3, 4]

//   // const obj = {}; // SyntaxError: Identifier 'obj' has already been declared
// }

// constExample();

//------------***** Hoisting *****---------------

// Hoisting: const is also hoisted but not initialized, resulting in a ReferenceError if accessed before declaration (due to the temporal dead zone).

// Here, const prevents reassignment but allows modifications to object properties or array elements, as long as the reference (memory location) doesn't change.

// Key Differences:

// Feature	        var	                                let	                            const
// Scope	        Function-scoped	                    Block-scoped	    B           lock-scoped
// Hoisting	        Yes (initialized to undefined)	    Yes (no initialization)	        Yes (no initialization)
// Reassignable	    Yes	                                Yes	                            No
// Re-declarable	Yes	                                No	                            No

// Summary:
// Use var for backward compatibility, though it's rarely recommended now.
// Use let for variables that will be reassigned.
// Use const for variables that shouldn’t be reassigned (but keep in mind that the content of objects and arrays can still change).
// This understanding helps prevent issues like variable collisions and bugs caused by hoisting in larger codebases.
