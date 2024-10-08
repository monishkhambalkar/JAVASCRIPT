// The JavaScript Event Loop and Form Events are core parts of how JavaScript handles asynchronous actions and interacts with the DOM. Let's break these concepts down from basic to advanced:

// 1. JavaScript Event Loop:
// The event loop is the mechanism that allows JavaScript to perform non-blocking I/O operations despite being single-threaded. Understanding the event loop is crucial for working with asynchronous JavaScript (e.g., promises, callbacks).

// Basic Concept:
// JavaScript runs in a single thread and executes code line by line (synchronously).
// Any asynchronous code (like setTimeout(), Promises, or fetch()) is handled by the event loop.
// The event loop continuously checks two main components:
// Call Stack: Where JavaScript code gets executed (synchronous code).
// Task Queue (Callback Queue): Where asynchronous tasks (like callbacks from setTimeout, fetch, etc.) wait to be executed after the current stack is empty.
// How it works:
// When an async operation (like setTimeout) is encountered, the main thread doesn't wait for it. Instead, it moves the callback to the task queue and continues executing other code.
// Once the call stack is empty (i.e., all synchronous code has been executed), the event loop picks up the first task from the task queue and pushes it onto the call stack to execute it.
// Example:

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

console.log("End");
// Execution Order:

// console.log('Start') gets executed first.
// The setTimeout callback is sent to the task queue.
// console.log('End') gets executed.
// After the stack is clear, the event loop checks the task queue and executes the setTimeout callback.
// Output:

// Start
// End
// Timeout callback
// Microtasks & Macrotasks:
// Microtasks: Promises and queueMicrotask() callbacks are placed in a separate queue and have higher priority than macrotasks.
// Macrotasks: setTimeout, setInterval, and I/O operations are macrotasks.
// The event loop first clears the microtask queue before moving to the macrotask queue.

// Advanced Example (with Promises):

console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");
// Execution Order:

console.log("Start");
setTimeout(); //schedules a macrotask.
Promise.resolve(); //schedules a microtask.
console.log("End");
// The event loop checks the microtask queue (executes Promise resolved).
// The event loop checks the macrotask queue (executes Timeout callback).
// Output:

// Start
// End
// Promise resolved
// Timeout callback
