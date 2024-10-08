// Form Events in JavaScript:
// Form events are events triggered when a user interacts with HTML form elements (e.g., input fields, checkboxes, buttons).

// Basic Form Events:
// submit: Triggered when a form is submitted.
// input: Fired when the value of an input field changes.
// focus: Fired when an element gains focus.
// blur: Fired when an element loses focus.
// change: Fired when the value of an input or select box is changed.
// Example:

{
  /* <form id="myForm">
  <input type="text" id="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form> */
}

const form = document.getElementById("myForm");

// Event listener for form submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents form submission
  alert("Form submitted!");
});

// Event listener for input field change
const nameInput = document.getElementById("name");
nameInput.addEventListener("input", function (event) {
  console.log(`Input changed to: ${event.target.value}`);
});

// Preventing Form Submission:
// The event.preventDefault() method is often used to prevent the form from submitting (default behavior) when processing via JavaScript.
// Advanced Form Handling with Validation:
// You can use JavaScript to validate forms before submission, checking things like empty fields, pattern matching, etc.

// <form id="myForm">
//   <input type="text" id="email" placeholder="Enter your email">
//   <button type="submit">Submit</button>
// </form>

{
  /* <script> */
}
const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  const emailInput = document.getElementById("email");
  if (!emailInput.value.includes("@")) {
    event.preventDefault(); // Prevent form submission
    alert("Please enter a valid email");
  }
});
// </script>
// Advanced: Debouncing in Form Events:
// Debouncing is a way to limit the rate at which a function is executed (useful for reducing the number of times a function is called during repetitive events like typing).

let timeout;
function debounce(func, delay) {
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

const nameInput = document.getElementById("name");
nameInput.addEventListener(
  "input",
  debounce(function () {
    console.log("User stopped typing");
  }, 300)
);
// FormData API:
// The FormData API allows you to easily construct key/value pairs representing form fields and their values.

const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(form);
  for (let [name, value] of formData) {
    console.log(`${name}: ${value}`);
  }
});
// 3. Combining Event Loop and Form Events (Asynchronous Form Handling):
// You can make form submissions asynchronous using fetch() to handle form data without a full page reload.

{
  /* <form id="myForm">
  <input type="text" id="name" placeholder="Enter your name">
  <button type="submit">Submit</button>
</form> */
}

const form = document.getElementById("myForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  try {
    const response = await fetch("https://example.com/api", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error submitting form:", error);
  }
});

// This example uses the event loop to handle the asynchronous fetch call and processes the result without reloading the page.

// Summary:
// The Event Loop handles JavaScript's non-blocking behavior by processing tasks from the call stack, microtask queue, and macrotask queue.
// Form Events are used to capture and handle interactions with form fields and submissions. With techniques like validation, debouncing, and asynchronous handling, forms can be made more dynamic and user-friendly.
