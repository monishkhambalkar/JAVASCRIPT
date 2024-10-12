// JavaScript Local Storage and Session Storage are part of the Web Storage API, which allows developers to store key-value pairs in the browser. These can be retrieved later, making them useful for persisting data between page reloads or browser sessions.

// 1. Overview of Web Storage API
// The Web Storage API provides two mechanisms:

// Local Storage: Persists data even after the browser is closed and reopened. Data is shared across all windows and tabs of the same origin.
// Session Storage: Persists data only for the duration of the page session (i.e., data is lost when the browser tab is closed or the session ends). Each tab/window has its own session storage.
// Key Differences:
// Local Storage: Persistent until manually cleared (either by user or programmatically).
// Session Storage: Cleared when the page session ends (i.e., when the browser tab or window is closed).
// 2. Basic Operations
// Both localStorage and sessionStorage share the same API:

// Setting data: setItem(key, value)
// Getting data: getItem(key)
// Removing data: removeItem(key)
// Clearing all data: clear()
// Getting the number of stored items: length
// Getting the key of an item: key(index)
// Example for Local Storage:

// Storing data
localStorage.setItem("username", "JohnDoe");

// Retrieving data
let user = localStorage.getItem("username");
console.log(user); // Output: JohnDoe

// Removing data
localStorage.removeItem("username");

// Clearing all data
localStorage.clear();

// Example for Session Storage:

// Storing data
sessionStorage.setItem("cart", JSON.stringify(["apple", "banana"]));

// Retrieving data
let cart = JSON.parse(sessionStorage.getItem("cart"));
console.log(cart); // Output: ['apple', 'banana']

// Removing data
sessionStorage.removeItem("cart");

// Clearing all data
sessionStorage.clear();

// Storage Limits and Capacity
// Both localStorage and sessionStorage have a storage limit of approximately 5MB per domain, although this can vary slightly between browsers.
// If storage exceeds this limit, a QuotaExceededError is thrown.
// 4. Storage Events
// When data in localStorage changes (i.e., data is added, removed, or modified), the storage event is fired. This event is not triggered in the same tab but will fire in other tabs of the same origin. This is particularly useful for synchronizing data across multiple browser tabs or windows.

window.addEventListener("storage", function (event) {
  console.log(`The key "${event.key}" was updated.`);
  console.log(`Old value: ${event.oldValue}`);
  console.log(`New value: ${event.newValue}`);
});

// Advanced Usage: Storing Complex Data
// Since Web Storage API only stores strings, complex data like objects and arrays need to be converted into a string format (typically JSON).

// Storing an object
let user = { name: "John", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving and parsing the object
let retrievedUser = JSON.parse(localStorage.getItem("user"));
console.log(retrievedUser); // Output: { name: "John", age: 30 }

// Use Cases
// Local Storage: Ideal for storing data that should persist across sessions. Common use cases include:

// Storing user preferences (e.g., theme, language).
// Caching API responses.
// Remembering items in a shopping cart for an extended period.
// Session Storage: Ideal for temporary storage of data that only needs to persist for the duration of the session. Common use cases include:

// Storing a shopping cart for the current tab session.
// Storing form data while navigating between pages.
// Managing per-tab state.
// 7. Security Considerations
// Sensitive Data: Avoid storing sensitive data like passwords or tokens in local or session storage, as it's easily accessible via JavaScript and can be exploited by XSS (Cross-Site Scripting) attacks.

// Same-origin Policy: Both localStorage and sessionStorage follow the same-origin policy, meaning data is accessible only within the same domain (protocol, host, and port).

// 8. Browser Support
// Both localStorage and sessionStorage are well-supported across modern browsers. However, it’s good to check for support using feature detection:

if (typeof Storage !== "undefined") {
  // Web Storage API is available
} else {
  // No Web Storage support
}

// Best Practices
// Limit Data Size: Store only necessary data to avoid hitting the storage limit.
// Use JSON: Always serialize complex data structures (arrays, objects) using JSON.
// Session vs Local: Choose sessionStorage for temporary data and localStorage for persistent data.
// Data Expiry: Local Storage does not expire on its own. To manage expiration, store timestamps alongside the data and manually remove it if it’s outdated.
// 10. Storage Management Strategies
// You can implement custom expiration mechanisms by adding a timestamp to stored data:

// Store data with an expiration time
function setWithExpiry(key, value, ttl) {
  const now = new Date();

  const item = {
    value: value,
    expiry: now.getTime() + ttl,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

// Retrieve data and check if it's expired
function getWithExpiry(key) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // If expired
  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

// 11. Polyfills
// For older browsers that don’t support Web Storage API, you can use polyfills to ensure compatibility. There are libraries that mimic the behavior of localStorage and sessionStorage.

// 12. Common Mistakes to Avoid
// Not JSON-parsing/storing complex data: When you store objects or arrays without stringifying, it leads to unexpected results.
// Relying on localStorage for secure data: localStorage is not a safe place for sensitive information.
// Forgetting to handle storage limits: Always anticipate QuotaExceededError and handle it gracefully.
