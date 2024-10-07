//An XMLHttpRequest (XHR) in JavaScript is used to interact with servers, allowing you to send HTTP requests and receive responses asynchronously. Here's a basic guide on how to use XMLHttpRequest:

//Steps for Making an XHR Request:

//Create an XMLHttpRequest object:
var xhr = new XMLHttpRequest();

// Define a callback function for handling the response: The onreadystatechange event is triggered every time the readyState changes.
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.responseText);
  }
};
// readyState == 4: The request is complete.
// status == 200: The HTTP status code for a successful request.

//Open a connection to the server: You need to specify the HTTP method (GET, POST, etc.) and the URL.
xhr.open("GET", "http://api.example.com/data", true);

//Send the request: For a GET request, you can simply call send() without parameters. For a POST request, you might need to set headers and send data.
xhr.send();

// for POST request
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status) {
    console.log(xhr.responseText);
  }
};

xhr.open("POST", "https://api.example.com/data", true);
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.send("name+monish&&age=24");

// Handling JSON Responses
// For modern applications, you'll often work with JSON data rather than plain text. You can parse the response directly into a JavaScript object.
var xhr = new XMLHttpRequest();
xml.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      var jsonResponse = JSON.parse(xhr.responseText);
      console.log(jsonResponse);
    } else {
      console.error("Request failed with Status", xhr.status);
    }
  }
};

xhr.open("GET", "https://api.example.com/data", true);
xhr.send();

//Handling Errors and Status Codes
//It's important to handle non-200 HTTP status codes, which indicate errors like 404 Not Found or 500 Internal Server Error.
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      console.log(xhr.responseText);
    } else {
      console.log("Error :", xhr.status, xhr.statusText);
    }
  }
};

//Setting Custom Headers
// You can add custom headers to the request, such as authentication tokens, content type, etc.
xhr.open("GET", "https://api.example.com/data", true);
xhr.setRequestHeader("Authorization", "Bearer your-token-here");
xhr.setRequestHeader("content-type", "application/json", true);
xhr.status();

//Sending Form Data
// Using the FormData object, you can send form data (like file uploads) in an efficient way.
var formData = new formData();

formData.append("userName", "Monish");
formData.append("file", fileInput.files[0]);
xhr.open("POST", "https:/api.example.com/upload", true);
xhr.send(formData);

// Handling Timeouts
xhr.timeout = 5000;

xhr.ontimeout = function () {
  console.log("Request time limit");
};
xhr.open("GET", "https://api.example.com/data", true);
xhr.send();

// Making Asynchronous Requests Synchronous
// By default, XMLHttpRequest requests are asynchronous, but you can make them synchronous (not recommended as it blocks the UI):
xhr.open("GET", "https://api.example.com/data", false); // Synchronous request
xhr.send();
console.log(xhr.responseText); // Will execute only after the request is complete

//Dealing with Cross-Origin Requests (CORS)
// When making requests to a different domain (Cross-Origin Resource Sharing, CORS), the server must allow such requests via specific headers. You can handle CORS using custom headers or withCredentials.
xhr.withCredentials = true;
xhr.open("GET", "https://api.example.com/data", true);
xhr.status;

//Monitoring Progress of Large Uploads/Downloads
xhr.upload.onprogress = function (event) {
  if (event.lengthComputable) {
    var percentComplete = (event.loaded / event.total) * 100;
    console.log("upload Process : ", percentComplete + "%");
  }
};

xhr.onprogress = function (event) {
  if (event.lengthComputable) {
    var percentComplete = (event.loaded / event.total) * 100;
    console.log("Download progress:", percentComplete + "%");
  }
};

// Handling Binary Data (Blobs, ArrayBuffers)
xhr.responseType = "blob"; // Set response type to 'blob' for binary data

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    var blob = xhr.response;
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "file.png"; // Downloaded file name
    document.body.appendChild(a);
    a.click();
  }
};

xhr.open("GET", "https://api.example.com/image.png", true);
xhr.send();

// Abort the Request
// xhr.abort();

// Chaining Multiple XHR Requests
//You may need to chain multiple XHR requests, where each request depends on the completion of the previous one.
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    // First request complete, now make the second request
    var xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function () {
      if (xhr2.readyState === 4 && xhr2.status === 200) {
        console.log("Second request complete");
      }
    };
    xhr2.open("GET", "https://api.example.com/secondData", true);
    xhr2.send();
  }
};
xhr.open("GET", "https://api.example.com/firstData", true);
xhr.send();

//Handling Different Response Types (JSON, XML, Plain Text)
// You can handle different response types based on the content returned from the server.

// Plain Text: Already covered in earlier examples.

// JSON: Use JSON.parse() to handle JSON data.

// XML: Use xhr.responseXML to parse XML responses.

var xmlDoc = xhr.responseXML;
var data = xmlDoc.getElementsByTagName("tagName")[0].childNodes[0].nodeValue;
console.log(data);

// These techniques take your usage of XMLHttpRequest to a more advanced level, allowing you to handle various real-world scenarios like managing authentication, progress tracking, binary data handling, and dealing with error states effectively. However, in modern JavaScript development, fetch() is often preferred due to its simplicity and cleaner syntax. But XMLHttpRequest still offers more fine-grained control for specific use cases.
