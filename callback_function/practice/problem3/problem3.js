//  User Authentication Logic:

// Question: You have a login page that sends user credentials to a server. Write a function that accepts the login response as a callback. If the login is successful, redirect the user to the dashboard.
// Hint: Use a callback to execute different logic based on the server's response.
//  Here's a simple JavaScript function for handling user authentication using a callback pattern. This approach processes the server response and redirects the user to the dashboard if the login is successful.

// Example Scenario:
// User submits login credentials.
// Server responds with either a successful or unsuccessful status.
// Callback function executes based on the server's response.
// JavaScript Code:

function loginUser(user, pass, callback) {
  setTimeout(() => {
    const serverResponse = {
      success: true,
      message: "login successfully",
      token: "hxughdfhbfus",
    };
    callback(serverResponse);
  }, 1000);
}

function handleLoginResponse(responds) {
  if (responds.success) {
    console.log(responds.message);
  } else {
    console.log("login failed");
  }
}

loginUser("Monish", "password", handleLoginResponse);
