// In JavaScript, Promises are used to handle asynchronous operations more efficiently. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises are especially helpful for dealing with asynchronous code that would otherwise require callbacks, leading to what is often referred to as "callback hell."

// Key States of a Promise:
// Pending: The initial state of the promise, neither fulfilled nor rejected.
// Fulfilled: The promise has been resolved successfully.
// Rejected: The promise has been rejected with an error.
// Creating a Promise:
// A promise is created using the Promise constructor, which takes a function with two arguments, resolve and reject.

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation
  let success = true;

  if (success) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed.");
  }
});

// Consuming a Promise:
// To handle the result of a promise, you use the .then(), .catch(), and .finally() methods:

// .then(): Executes when the promise is fulfilled.
// .catch(): Executes when the promise is rejected.
// .finally(): Executes once the promise is settled, regardless of the outcome.

myPromise
  .then((result) => {
    console.log(result); // If resolved: "Operation was successful!"
  })
  .catch((error) => {
    console.error(error); // If rejected: "Operation failed."
  })
  .finally(() => {
    console.log("Promise is settled.");
  });

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Resolved after ${ms} milliseconds`);
    }, ms);
  });
}

delay(2000).then((message) => {
  console.log(message); // Logs after 2 seconds: "Resolved after 2000 milliseconds"
});

// Chaining Promises:
// Promises can be chained, allowing you to execute multiple asynchronous operations in sequence.

new Promise((resolve) => {
  resolve(10);
})
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 40
  });

//   Promise.all(), Promise.race(), and Promise.any()
// Promise.all(): Resolves when all promises are resolved, or rejects if any promise fails.

const promise1 = Promise.resolve(3);
const promise2 = Promise.resolve(42);
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});

// Promise.race(): Resolves or rejects as soon as any of the promises in the array is settled (whether resolved or rejected).

const p1 = new Promise((resolve) => setTimeout(resolve, 500, "One"));
const p2 = new Promise((resolve) => setTimeout(resolve, 100, "Two"));

Promise.race([p1, p2]).then((result) => {
  console.log(result); // "Two" (because p2 resolved first)
});

// Promise.any(): Resolves as soon as the first promise resolves (ignoring rejections).

const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("Success 2");
const p3 = Promise.reject("Error 3");

Promise.any([p1, p2, p3]).then((result) => {
  console.log(result); // "Success 2"
});

// Async/Await (Promise Syntax Sugar):
// async and await make working with promises more straightforward, allowing you to write asynchronous code that looks synchronous.

async function asyncExample() {
  try {
    const result = await delay(2000);
    console.log(result); // Logs after 2 seconds: "Resolved after 2000 milliseconds"
  } catch (error) {
    console.error(error);
  }
}

asyncExample();

// Summary:
// Promises simplify asynchronous code handling by avoiding deep callback nesting.
// then(), catch(), and finally() are used to handle the result or error of a promise.
// Promises can be chained, and utilities like Promise.all(), Promise.race(), and Promise.any() allow handling multiple promises simultaneously.
// async/await provides a cleaner way to work with promises.

// The primary difference between async/await and promises in JavaScript lies in how they allow you to write and handle asynchronous code. Here's a breakdown of the key differences:

// 1. Syntax and Readability
// Promises: Promises use .then(), .catch(), and .finally() to handle asynchronous operations. This can result in more complex code as you nest these methods for multiple async calls, making it harder to follow, especially when chaining multiple .then() blocks.

// Example using Promises:

fetchData()
  .then((data) => {
    return processData(data);
  })
  .then((processedData) => {
    return saveData(processedData);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//   async/await: async/await is built on top of promises and offers a cleaner, more readable syntax. It allows asynchronous code to look and behave like synchronous code, avoiding deeply nested callbacks or promise chains. The async keyword is used to define an asynchronous function, and await is used to pause execution until a promise resolves or rejects.

// Example using async/await:

async function handleData() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    await saveData(processedData);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Key Point: async/await makes asynchronous code easier to read and reason about, especially when chaining multiple asynchronous calls.

// 2. Error Handling
// Promises: With promises, you handle errors using .catch(). If any part of the promise chain fails, the error will be caught in the nearest .catch() block.

fetchData()
  .then((data) => processData(data))
  .then((processedData) => saveData(processedData))
  .catch((error) => {
    console.error("Error:", error); // Handles error for any of the promises
  });

//   async/await: With async/await, error handling is done using try...catch. This structure allows for easier and more localized error handling, similar to how you would handle errors in synchronous code.

async function handleData() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    await saveData(processedData);
  } catch (error) {
    console.error("Error:", error); // Handles errors from any of the awaited calls
  }
}

async function handleData() {
  try {
    const data = await fetchData();
    const processedData = await processData(data);
    await saveData(processedData);
  } catch (error) {
    console.error("Error:", error); // Handles errors from any of the awaited calls
  }
}

// Key Point: async/await allows for cleaner and more centralized error handling through try...catch blocks.

// 3. Chaining and Sequential Execution
// Promises: Promises allow chaining. Each .then() can return a promise, which is then passed to the next .then(). This is useful when you want to perform asynchronous operations in sequence.

// However, promise chains are less intuitive when the operations are dependent on each other, and chaining many .then() calls can become messy.

// async/await: async/await allows you to write code that appears synchronous but handles asynchronous operations sequentially. You can await each operation in sequence without nesting.

async function sequentialTasks() {
  const result1 = await asyncTask1();
  const result2 = await asyncTask2(result1);
  const result3 = await asyncTask3(result2);
  return result3;
}

// Key Point: async/await makes writing sequential asynchronous operations much more intuitive and readable.

// 4. Concurrency
// Promises: If you want to execute multiple asynchronous tasks in parallel, you can use Promise.all() to run multiple promises concurrently. This is useful when the tasks are independent and don’t depend on each other's results.

Promise.all([fetchData(), fetchOtherData()]).then(([data1, data2]) => {
  // Both promises completed
});

// async/await: With async/await, you can also achieve concurrency, but if you simply await each call in sequence, they will execute one after the other. To run them in parallel, you need to use Promise.all() with async/await.

async function concurrentTasks() {
  const [data1, data2] = await Promise.all([fetchData(), fetchOtherData()]);
  return { data1, data2 };
}

// Key Point: Both promises and async/await support concurrency, but async/await needs to use Promise.all() to run multiple tasks in parallel.

// 5. Backwards Compatibility
// Promises: Promises have been part of JavaScript since ES6 (2015) and are widely supported in modern JavaScript environments, including web browsers and Node.js.

// async/await: async/await was introduced in ES8 (2017). It is based on promises, so older environments that support promises but not async/await may require transpilation (using tools like Babel) to ensure compatibility.

// Key Point: While both promises and async/await are widely supported, async/await is newer and may require transpilation in older environments.

// Summary of Differences:
// Feature	Promises	async/await
// Syntax	Chain .then(), .catch() for handling results	Cleaner, more readable code using try...catch with await
// Error Handling	Use .catch() to handle errors	Use try...catch for handling errors
// Chaining	Promise chaining through .then()	Sequential execution using await
// Concurrency	Use Promise.all() for parallel execution	Use Promise.all() with await for concurrency
// Readability	Can become hard to read with deeply nested chains	Easier to read and write, more like synchronous code
// Compatibility	Supported from ES6 (2015)	Introduced in ES8 (2017)
// In conclusion, async/await is essentially syntactic sugar built on top of promises. It simplifies working with asynchronous code, making it more readable, especially for sequential operations, while still offering all the benefits of promises.
