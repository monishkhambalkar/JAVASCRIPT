// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartDisplay(cart) {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
      cartItemsElement.appendChild(li);
      total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  function addToCart(product) {
    const cart = loadCart();
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    updateCartDisplay(cart);
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productElement = button.closest(".product");
      const product = {
        id: productElement.getAttribute("data-id"),
        name: productElement.getAttribute("data-name"),
        price: parseFloat(productElement.getAttribute("data-price")),
      };

      addToCart(product);
    });
  });

  // Load and display cart on page load
  updateCartDisplay(loadCart());
});

//Basic - Local Storage:
// How do you store a key-value pair in local storage? Write a function to save a user’s name in local storage.
function saveUserName(name) {
  localStorage.setItem("userName", name);
}

saveUserName("Monish");

const name = localStorage.getItem("userName");
console.log(name);

// Basic - Session Storage:
// Write a JavaScript function to store a session identifier (sessionID) in session storage.
function saveSessionID(sessionID) {
  sessionStorage.setItem("sessionID", sessionID);
}

saveSessionID("ABC123XYZ");

const sessionID = sessionStorage.getItem("sessionID");
console.log(sessionID);

// Basic - Cookies:
// How do you create a cookie that expires after 7 days in JavaScript? Write a function to store a user’s theme preference (dark/light) in a cookie.
function setThemePreference(theme) {
  let date = new Date();
  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 1000);
  let expires = "expires=" + date.toUTCString();
  document.cookie = "theme=" + theme + "; " + expires + "; path=/";
}

setThemePreference("dark");

function getThemePreference() {
  let cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === "theme") {
      return value;
    }
  }
  return null;
}

console.log(getThemePreference());

// Basic - Local Storage:
// Write a function to check if a specific key ("isLoggedIn") exists in local storage and return its value.

function checkIsLoggedIn() {
  const value = localStorage.getItem("isLoggedIn");
  return value !== null ? value : "Key not found";
}
console.log(checkIsLoggedIn());

// Intermediate - Local Storage:
// Create a function that stores an array of favorite items in local storage and retrieves them as an array.\
function saveFavoriteItems(items) {
  localStorage.setItem("favoriteItems", JSON.stringify(items));
}
let favoriteItems = ["Laptop", "Smartphone", "Headphones"];
saveFavoriteItems(favoriteItems);

function getFavoriteItems() {
  const items = localStorage.getItem("favoriteItems");
  return items ? JSON.parse(items) : [];
}

const storedFavorites = getFavoriteItems();
console.log(storedFavorites);

function trackPageVisits() {
  let visitCount = sessionStorage.getItem("visitCount");
  visitCount = visitCount ? parseInt(visitCount) + 1 : 1;

  sessionStorage.setItem("visitCount", visitCount);
  console.log(`Page visit count: ${visitCount}`);
}

trackPageVisits();

// Intermediate - Cookies:
// How would you retrieve a specific cookie by its name? Write a function to get the value of a cookie named "userToken".

function getCookie(name) {
  let cookie = document.cookie.split(";");
  for (let cookie of cookies) {
    let [key, value] = cookie.split("=");
    if (key === name) {
      return value;
    }
  }
  return null;
}

console.log(getCookie("userToken"));

// Intermediate - Local Storage:
// Write a function to remove all the items from local storage except one specific key ("userSettings").

function clearLocalStorageExcept(exceptKey) {
  const preservedValue = localStorage.getItem(exceptKey);

  localStorage.clear();

  if (preservedValue !== null) {
    localStorage.setItem(exceptKey, preservedValue);
  }
}
clearLocalStorageExcept("userSettings");

// Advanced - Cookies:
// Write a JavaScript function that parses all cookies into an object with key-value pairs.

function parseCookie() {
  return document.cookie
    .split(";")
    .map((cookie) => cookie.split("=."))
    .reduce((accumulator, [key, value]) => {
      accumulator[decodeURIComponent(key.trim())] = decodeURIComponent(
        value.trim()
      );
      return accumulator;
    }, {});
}

const cookies = parseCookie();
console.log(cookies);

// Advanced - Session Storage/Local Storage:
// Create a function that synchronizes session storage with local storage whenever there is a change in either storage type.

function synchronizeStorage() {
  const SESSION_KEY = "sessionData";
  const LOCAL_KEY = "localData";

  const localData = localStorage.getItem(LOCAL_KEY);
  if (localData !== null) {
    sessionStorage.setItem(SESSION_KEY, localData);
  }

  window.addEventListener("storage", (event) => {
    if (event.key == LOCAL_KEY && event.newValue !== value) {
      sessionStorage.setItem(SESSION_KEY, event.newValue);
    }
  });

  const originalSetItem = sessionStorage.setItem;
  sessionStorage.setItem = function (key, value) {
    if (key == SESSION_KEY) {
      localStorage.setItem(LOCAL_KEY, value);
    }
    originalSetItem.apply(this, arguments);
  };

  const originalRemoveItem = sessionStorage.removeItem;
  sessionStorage.removeItem = function (key) {
    if (key === SESSION_KEY) {
      localStorage.removeItem(LOCAL_KEY);
    }
    originalRemoveItem.apply(this, arguments);
  };
}
