function executeFunctionsInSequence(functionsArray, delay, callback) {
  let index = 0;

  function next() {
    if (index < functionsArray.length) {
      functionsArray[index](); // Execute the current function
      index++;
      setTimeout(next, delay); // Call the next function after the delay
    } else if (callback) {
      callback(); // All functions are executed, call the callback if provided
    }
  }

  // Start executing the functions
  next();
}

// Example usage:
const functionsArray = [
  () => console.log("Function 1 executed"),
  () => console.log("Function 2 executed"),
  () => console.log("Function 3 executed"),
  () => console.log("Function 4 executed"),
];

// Execute the functions with a delay of 1000ms (1 second) between each
executeFunctionsInSequence(functionsArray, 1000, () => {
  console.log("All functions executed");
});
