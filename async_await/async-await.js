// Async/Await in JavaScript
// Use:
// async/await is used to handle asynchronous operations in JavaScript. It provides a cleaner and more readable syntax for working with promises, allowing developers to write asynchronous code that looks and behaves more like synchronous code. It simplifies handling multiple asynchronous operations sequentially or concurrently.

// Advantages:
// Readability: async/await syntax is easier to read and understand compared to using .then() and .catch() with promises.
// Error Handling: It allows using try/catch for error handling, which is more intuitive than using .catch() on promises.
// Better Flow Control: Makes it easier to write sequential and dependent asynchronous code without chaining multiple promises.
// Debugging: Stack traces in errors are clearer compared to promise chains.
// Avoid Callback Hell: Reduces the nesting that occurs with multiple asynchronous operations, making the code structure more manageable.

// When to Use Async/Await:
// Multiple Asynchronous Tasks in Sequence: When you have tasks that depend on each other and need to be executed in sequence.
// Improved Readability: When you want more readable asynchronous code without deeply nested .then() blocks.
// Simplified Error Handling: When you want to handle errors using traditional try/catch blocks.
// Handling Complex Logic: When combining multiple asynchronous operations, especially when one depends on the result of the previous one.

// Real-life Scenario Example:
// Imagine you're building a food delivery app where you need to perform several asynchronous tasks in sequence:

// Fetch user data from the server.
// Fetch the user's current order from the server.
// Process payment after fetching the order details.
// Update order status after successful payment.
// Code Example with Async/Await:

// Simulate asynchronous functions
const getUserData = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched user data for user ${userId}`);
      resolve({ userId, name: "John Doe" });
    }, 1000);
  });
};

const getOrderDetails = async (userId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Fetched order details for user ${userId}`);
      resolve({ orderId: 101, amount: 50 });
    }, 1000);
  });
};

const processPayment = async (order) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.amount > 0) {
        console.log(`Processed payment for order ${order.orderId}`);
        resolve(true);
      } else {
        reject("Payment failed, invalid amount");
      }
    }, 1000);
  });
};

const updateOrderStatus = async (orderId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Order ${orderId} status updated to "Paid"`);
      resolve();
    }, 500);
  });
};

// Using async/await to handle these operations in sequence
const handleOrderProcess = async (userId) => {
  try {
    const user = await getUserData(userId);
    const order = await getOrderDetails(user.userId);
    await processPayment(order);
    await updateOrderStatus(order.orderId);
    console.log("Order processed successfully!");
  } catch (error) {
    console.error("Error processing order:", error);
  }
};

// Call the function to handle the order process
handleOrderProcess(123);

// Explanation:
// getUserData(userId) is called to fetch the user's data.
// Once the user data is retrieved, getOrderDetails(user.userId) fetches the user's current order.
// After the order is fetched, processPayment(order) handles the payment processing.
// If the payment is successful, updateOrderStatus(order.orderId) updates the status of the order.
// All the asynchronous tasks are handled sequentially, and any errors are caught using the try/catch block.
// By using async/await, this code becomes much cleaner and easier to read compared to using promise chains with .then() and .catch().
