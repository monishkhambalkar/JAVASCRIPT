// Synchronous and Asynchronous in JavaScript with AJAX API Calls
// In JavaScript, synchronous and asynchronous programming define how the code execution is handled, especially when performing tasks like API calls using AJAX.

// 1. Synchronous Execution
// Synchronous programming means that tasks are performed one at a time, and the code waits for the current task to finish before moving to the next one. If you're making a synchronous AJAX request, the entire browser will freeze (or "block") until the request is completed.

// Example: Synchronous AJAX API Call
function makeSynchronousRequest() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", false); // 'false' makes it synchronous
  xhr.send();

  if (xhr.status === 200) {
    console.log(JSON.parse(xhr.responseText));
  }
}

console.log("Start Synchronous Request");
makeSynchronousRequest();
console.log("End Synchronous Request");

// In the above code, the xhr.open() method’s third parameter is false, making the request synchronous.
// The browser will wait for the API response, freezing any other tasks.
// The execution order would be:
// "Start Synchronous Request" is printed first.
// The browser waits for the API to respond.
// Once the response is received, it's logged to the console.
// Finally, "End Synchronous Request" is printed.
// Output (if the request takes 1 second):

Start Synchronous Request
{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }
// End Synchronous Request

// Notice that no other code can run during the request, which makes synchronous requests a poor choice for web applications, as they block the UI.

// 2. Asynchronous Execution
// Asynchronous programming allows multiple tasks to run simultaneously. When making an asynchronous AJAX request, the browser doesn't wait for the API response. Instead, it moves on to the next task and executes the callback function when the response arrives.

// Example: Asynchronous AJAX API Call

function makeAsynchronousRequest() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); // 'true' makes it asynchronous
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText));
        }
    };
    xhr.send();
}

console.log("Start Asynchronous Request");
makeAsynchronousRequest();
console.log("End Asynchronous Request");

// Explanation:

// Here, xhr.open() is set with true for asynchronous behavior.
// The function onreadystatechange is used to define what happens when the request state changes (e.g., when the API response is ready).
// The browser doesn't wait for the API response to return. It moves to the next statement immediately.


Start Asynchronous Request
End Asynchronous Request
{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }


// Notice the difference: The browser continues execution, prints "End Asynchronous Request" while waiting for the API response, and then prints the response data when it's ready.

// 3. Using fetch() for Asynchronous Calls
// Modern JavaScript uses the fetch() API, which is asynchronous by default and returns a Promise. It’s often used instead of XMLHttpRequest.

// Example: Asynchronous Fetch API

function makeFetchRequest() {
    console.log("Start Fetch Request");

    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

    console.log("End Fetch Request");
}

makeFetchRequest();

// Explanation:

// The fetch() API returns a Promise, so .then() and .catch() are used to handle the response and errors asynchronously.
// Like the previous example, the browser does not wait for the API response and immediately prints "End Fetch Request".

Start Fetch Request
End Fetch Request
{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }


// 4. Using async/await for Asynchronous Calls
// async/await provides a cleaner syntax to handle asynchronous code. It still uses Promises under the hood but makes the code look more like synchronous code.

// Example: Asynchronous Call with async/await

async function makeAsyncAwaitRequest() {
    console.log("Start Async/Await Request");

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }

    console.log("End Async/Await Request");
}

makeAsyncAwaitRequest();

// Explanation:

// The async keyword is used before the function to make it asynchronous.
// The await keyword pauses the function execution until the fetch() promise resolves. However, it doesn’t block the whole browser—only the function where it's used is paused.
// This makes it look like synchronous code, but without blocking the entire browser.
// Output:


// Start Async/Await Request
// { "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }
// End Async/Await Request


// Summary:
// Synchronous (blocking): The code waits for the API response before moving on to the next line.
// Use case: Rarely used, as it freezes the browser (not recommended for most applications).
// Asynchronous (non-blocking): The browser continues executing code while waiting for the API response.
// Asynchronous is the default for modern applications as it keeps the UI responsive.
// Examples of asynchronous techniques:

// Using XMLHttpRequest with true for asynchronous.
// Using fetch() with Promises.
// Using async/await for cleaner syntax in asynchronous operations.
// Asynchronous code ensures that your application remains responsive, even during API calls.