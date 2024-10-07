// Fetch API and Web APIs in JavaScript: From Basic to Advanced
// JavaScript has evolved to work seamlessly with web services through Web APIs and, in particular, the Fetch API for making HTTP requests. Below is a structured guide, progressing from basic to advanced concepts.

//Basics of Web APIs
// What are Web APIs?
// Web APIs are interfaces provided by browsers or external services that allow your web application to interact with the web in various ways. These APIs enable functionality like fetching data from the internet, manipulating documents, and handling multimedia.

// Some common Web APIs include:

// DOM API (Document Object Model) – for manipulating HTML and CSS.
// Fetch API – for making HTTP requests to servers.
// Geolocation API – for obtaining geographic location.
// Storage API – for storing data locally.
// Canvas API – for drawing graphics.

//Fetch API: Basics
// The Fetch API is a modern, promise-based way to make HTTP requests. It provides a more powerful and flexible feature set compared to the older XMLHttpRequest and is supported in most browsers.

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error("network response was not ok");
    }
    return response.ok;
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.error("There was a problem with the fetch operation:", error)
  );

//   Example: Fetching Data from an API
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//   Key Points:
// Promise-based: fetch() returns a promise, making it easier to work with asynchronous code.
// Simplified syntax: No need for XMLHttpRequest boilerplate.
// Supports GET, POST, PUT, DELETE, etc. through options

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-type": "application / json " },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1,
  }),
})
  .the((response) => response.json)
  .then((data) => console.log(data))
  .catch((error) => console.log("Error : ", error));

//   Fetch API: Intermediate
// Response Object
// The Response object returned by fetch() contains useful methods and properties:

// .ok: Checks if the response was successful (status codes 200-299).
// .status: HTTP status code of the response.
// .json(), .text(), .blob(), .arrayBuffer(): Methods to extract response data.

// Example: Handling Text and Blob Data
// Fetching plain text
fetch("/example.txt")
  .then((response) => response.text())
  .then((data) => console.log(data));

// Fetching image data as Blob
fetch("/example.jpg")
  .then((response) => response.blob())
  .then((blob) => {
    const imgURL = URL.createObjectURL(blob);
    document.querySelector("img").src = imgURL;
  });

//   Error Handling with Fetch API
// Unlike XMLHttpRequest, fetch() only rejects a promise if there's a network failure. For other errors like 404 or 500, you must manually handle them.

fetch("/not-found")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .catch((error) => console.error("Fetch Error:", error));

//   Adding Request Headers
// Custom headers can be added to your fetch requests by using the headers option
fetch("https://api.example.com/data", {
  method: "GET",
  headers: {
    Authorization: "Bearer token",
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

//   Abort Controller
// Sometimes you may want to cancel a fetch request (e.g., due to timeout or user action). This is where AbortController comes in.

// const controller = new AbortController();
// const signal = controller.signal;

fetch("/long-running-request", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Fetch aborted");
    } else {
      console.error("Error:", error);
    }
  });

// Abort the request after 5 seconds
setTimeout(() => controller.abort(), 5000);

// Streaming Responses (Advanced)
// The Fetch API allows you to stream response bodies, which is useful for handling large files like videos or images.
fetch("https://example.com/largefile").then((response) => {
  const reader = response.body.getReader();
  const decoder = new TextDecoder("utf-8");

  return reader.read().then(function processText({ done, value }) {
    if (done) {
      console.log("Stream complete");
      return;
    }

    console.log(decoder.decode(value));
    return reader.read().then(processText);
  });
});

// Retry Logic and Timeout with Fetch
// You might want to retry a failed fetch request or add a timeout mechanism.

// Example: Retry Logic
const fetchWithRetry = (url, options, retries = 3) =>
  fetch(url, options).catch((error) => {
    if (retries > 0) {
      console.log(`Retrying... (${retries})`);
      return fetchWithRetry(url, options, retries - 1);
    } else {
      throw error;
    }
  });

fetchWithRetry("https://api.example.com", {}, 3)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Fetch failed after retries:", error));

//   Example: Adding Timeout
const fetchWithTimeout = (url, options, timeout = 5000) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const fetchPromise = fetch(url, { ...options, signal });

  const timeoutPromise = new Promise((_, reject) =>
    setTimeout(() => {
      controller.abort();
      reject(new Error("Request timed out"));
    }, timeout)
  );

  return Promise.race([fetchPromise, timeoutPromise]);
};

fetchWithTimeout("https://api.example.com", {}, 3000)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

//   Web APIs: Advanced
// Working with Other Web APIs
// LocalStorage API
// Stores data in key-value pairs in the browser that persists even after the page is refreshed or the browser is closed.
localStorage.setItem("username", "John");
const user = localStorage.getItem("username");
console.log(user); // Output: John

// SessionStorage API
// Similar to localStorage, but data persists only for the duration of the page session.
sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token"));

// Geolocation API
// Retrieve the geographic position of a device.

navigator.geolocation.getCurrentPosition((position) => {
  console.log("Latitude:", position.coords.latitude);
  console.log("Longitude:", position.coords.longitude);
});

// Notifications API
// Display system-level notifications.
if (Notification.permission === "granted") {
  new Notification("Hello, this is a notification!");
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification("Hello, notifications granted!");
    }
  });
}
