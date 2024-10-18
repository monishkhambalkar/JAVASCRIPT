// 1. Basic - Local Storage:
function saveUserName(name) {
  localStorage.setItem("name", name);
}

saveUserName("Monish");

// 2. Basic - Session Storage:
function saveSessionID(sessionID) {
  sessionStorage.setItem("sessionID", sessionID);
}

saveSessionID("ghty");

// 3. Basic - Cookies:
function saveThemePreference(theme) {
  const date = new Date();

  date.setTime(date.getTime() + 7 * 24 * 60 * 60 * 100);

  const expires = "expires=" + date.toUTCString();

  document.cookie = "theme=" + theme + ";" + expires + ";path=/";
}

saveThemePreference("dark");

// 4. Basic - Local Storage:
function checkIfLogin() {
  if (localStorage.getItem("isLoggedIn") !== null) {
    return localStorage.getItem("isLoggedIn");
  } else {
    return null;
  }
}

const isLoggedInValue = checkIfLogin();
console.log(isLoggedInValue);

// 5. Intermediate - Local Storage:
function saveFavoriteItems(item) {
  localStorage.setItem("favItem", JSON.stringify(item));
}
const favorites = ["Item 1", "Item 2", "Item 3"];
saveFavoriteItems(favorites);

function getFavoriteItems() {
  return localStorage.getItem("favItem")
    ? JSON.parse(localStorage.getItem("favItem"))
    : [];
}
const result = getFavoriteItems();
console.log(result);

//6.Intermediate - Session Storage:

// Function to track visit count in session storage
function trackVisitCount() {
  // Get the current visit count from session storage (default to 0 if not found)
  let visitCount = sessionStorage.getItem("visitCount");

  // If there's no visit count, initialize it to 1 (first visit)
  if (!visitCount) {
    visitCount = 1;
  } else {
    // Increment the visit count
    visitCount = parseInt(visitCount) + 1;
  }

  // Store the updated visit count in session storage
  sessionStorage.setItem("visitCount", visitCount);

  // Display the visit count (for demonstration)
  console.log(
    `You have visited this page ${visitCount} times during this session.`
  );
}

// Call the function to track the visit count
trackVisitCount();

// 7. Intermediate - Cookies:
function getCookies(name) {
  let getCookieArr = document.cookie.split(";");
  for (let i = 0; i < getCookieArr.length; i++) {
    const cookie = getCookieArr[i].trim();
    if (cookie.startsWith(name + "=")) {
      return cookie.substring(name.length + 1);
    }
  }
  return null;
}

let userToken = getCookies("userToken");
console.log(userToken);

// 8. Intermediate - Local Storage:
function removeAllExceptOne(exceptKey) {
  for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i); // Get the key at index i
    if (key !== exceptKey) {
      // Check if the key is not the one to keep
      localStorage.removeItem(key); // Remove the item
    }
  }
}

// Usage
removeAllExceptOne("userSettings");

// 9. Intermediate - Local Storage/Session Storage:
function moveSessionDataToLocalData() {
  for (let i = 0; i < sessionStorage.length; i++) {
    const key = sessionStorage.key[i];
    const val = sessionStorage.getItem[key];
    localStorage.setItem(key, val);
  }
  sessionStorage.clear();
}

// 10.Advanced - Cookies:
function parseCookies() {
  let cookiesObject = {};
  let cookiesArray = document.cookie.split(";");

  cookiesArray.forEach((cookie) => {
    cookie = cookie.trim();
    let [key, val] = cookie.split("=");
    if (key) {
      cookiesObject[key] = decodeURIComponent(val);
    }
  });
  return cookiesObject;
}

let cookies = parseCookies();
console.log(cookies);

// 11. clear data

function clearStorageOnLogout() {
  // Clear all localStorage
  localStorage.clear();

  // Clear all sessionStorage
  sessionStorage.clear();

  // Optionally, you can log the user out from the system or redirect to a login page
  console.log("All storage cleared. User has been logged out.");
  // window.location.href = '/login'; // Redirect to login page if needed
}
