// Callback Functions in JavaScript
// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. Callbacks are used extensively in JavaScript, particularly in asynchronous programming (e.g., when working with events, timers, network requests, etc.).

// Basic Example of a Callback Function
// In this simple example, we pass a function as an argument to another function and call it inside the outer function.

// Basic callback function example
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

// Passing 'sayGoodbye' function as a callback
greet("Alice", sayGoodbye);

// Output:
// Hello Alice
// Goodbye!

// Here, greet takes two arguments: name and callback. The callback is executed once greet completes.

// Callback in Asynchronous Code
// JavaScript is asynchronous by nature, meaning certain code like fetching data from a server doesn't block the execution of other code. Callbacks are used to handle this asynchronous nature.

// Simulating an asynchronous operation with setTimeout
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { name: "Alice", age: 25 };
    callback(data); // Once data is "fetched", we call the callback
  }, 2000);
}

function processData(data) {
  console.log("Processing data: ", data);
}

// fetchData takes 'processData' as a callback
fetchData(processData);

// Output:
// Fetching data...
// (after 2 seconds)
// Processing data: { name: 'Alice', age: 25 }

// In this example, fetchData simulates a time-consuming operation (such as fetching data from a database), and once it's done, it calls the processData callback to handle the result.

// Callback with Array Methods
// Many JavaScript array methods take callbacks, such as forEach, map, filter, and reduce. These methods invoke the callback function for each element of the array.

// Example with forEach:

const numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {
  console.log(number * 2);
});

// Output:
// 2
// 4
// 6
// 8

const numbers = [1, 2, 3, 4];

const doubled = numbers.map(function (number) {
  return number * 2;
});

console.log(doubled);

// Output: [2, 4, 6, 8]

// Here, map transforms each element of the array and returns a new array with the results of calling the callback function.

// Callback with Events
// JavaScript callbacks are often used in event handling, such as when you want to execute some code when a user clicks a button.

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Event Callback</title>
// </head>
// <body>
//     <button id="myButton">Click Me</button>

//     <script>
//         const button = document.getElementById('myButton');

//         // Adding a click event listener
//         button.addEventListener('click', function() {
//             console.log('Button was clicked!');
//         });
//     </script>
// </body>
// </html>

{
  /* 
In this example, when the button is clicked, the callback function passed to addEventListener is executed, and "Button was clicked!" is logged to the console.

Handling Errors in Callback
A common pattern with callbacks is the error-first callback, where the first argument of the callback is reserved for an error (if any occurs), and the second argument is for successful results. This is often seen in Node.js. */
}

function fetchData(callback) {
  setTimeout(() => {
    const error = null; // Assume no error occurred
    const data = { name: "Alice", age: 25 };
    callback(error, data); // Pass error first, data second
  }, 2000);
}

function handleData(error, data) {
  if (error) {
    console.error("An error occurred:", error);
  } else {
    console.log("Received data:", data);
  }
}

fetchData(handleData);

// Output (after 2 seconds):
// Received data: { name: 'Alice', age: 25 }

// If there had been an error (e.g., const error = 'Network error';), the handleData function would log the error instead of the data.

// Nested Callbacks (Callback Hell)
// When you need to execute multiple asynchronous tasks in sequence, you might end up nesting callbacks within callbacks. This is called "callback hell."

function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

step1(function () {
  step2(function () {
    step3(function () {
      console.log("All steps completed");
    });
  });
});

// Output (after 3 seconds):
// Step 1 completed
// Step 2 completed
// Step 3 completed
// All steps completed

// This nesting makes the code harder to maintain and understand. Promises and async/await were introduced in JavaScript to mitigate this issue.

// Advanced Example: Function as a Callback
// You can pass a named or anonymous function as a callback, allowing you to dynamically change behavior at runtime.

// Defining the callback functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// A higher-order function using callbacks
function calculate(a, b, operation) {
  return operation(a, b); // `operation` is the callback
}

console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, subtract)); // Output: 2

// Conclusion
// Callback functions are a core concept in JavaScript, enabling more flexible, dynamic, and asynchronous programming. Whether you're using callbacks for simple array manipulations or handling asynchronous network requests, mastering this concept is crucial for JavaScript development.

// In modern JavaScript, callbacks are often replaced by Promises and async/await for better readability and error handling, but callbacks remain essential in many situations.

// Here are 10 questions ranging from basic to advanced that test your understanding of callback functions in JavaScript. Each question comes with a solution to help you practice and learn.

// 1. Basic Callback Execution

function performOperation(num1, num2, callback) {
  return callback(num1, num2);
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function div(a, b) {
  return a / b;
}

function mul(a, b) {
  return a * b;
}

console.log(performOperation(4, 5, sum));

console.log(performOperation(5, 1, sub));

console.log(performOperation(4, 2, div));

console.log(performOperation(4, 2, mul));

// 2. Passing Anonymous Callback Function

function performOperationAny(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(
  performOperationAny(4, 5, function (a, b) {
    return a + b;
  })
);

// 4. Callback with setTimeout
function delayedGreeting(name, callback) {
  console.log("Hello" + name);
  setTimeout(callback, 2000);
}
delayedGreeting("Alice", function () {
  console.log("Nice to meet you");
});

// 5. Error-first Callback

function fetchData(callback) {
  const isError = false;
  setTimeout(() => {
    if (isError) {
      callback("Error : unable to fetch data", null);
    } else {
      callback(null, { name: "Monish", age: 28 });
    }
  }, 1000);
}

fetchData(function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

//6. Higher-order Function Returning a Callback
function createMultiplier(x) {
  return function (y) {
    return x * y;
  };
}

const multiplier3 = createMultiplier(3);
console.log(multiplier3(5));

// 7. Asynchronous Callback Chain
function step1(callback) {
  setTimeout(() => {
    console.log("Step 1 completed");
    callback();
  }, 1000);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 completed");
    callback();
  }, 1000);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 completed");
    callback();
  }, 1000);
}

step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps completed");
    });
  });
});

// Output (after 3 seconds):
// Step 1 completed
// Step 2 completed
// Step 3 completed
// All steps completed

// 8. Multiple Callbacks in a Function
function downloadFile(filename, onSuccess, onFailure) {
  const isSuccess = true; // Simulate a successful download
  setTimeout(() => {
    if (isSuccess) {
      onSuccess(filename);
    } else {
      onFailure("Failed to download " + filename);
    }
  }, 1000);
}

downloadFile(
  "myfile.txt",
  function (file) {
    console.log(file + " downloaded successfully");
  },
  function (error) {
    console.error(error);
  }
);

// 10. Callback to Process Array Items

function processItems(numbers, callback) {
  for (let i = 0; i < numbers.length; i++) {
    callback(numbers[i]);
  }
}

processItems([1, 2, 3], function (num) {
  console.log(num * 2);
});

// Output:
// 2
// 4
// 6
