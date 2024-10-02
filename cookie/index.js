let userData = {
  username: "john_doe_123",
  email: "john.doe@example.com",
  fullName: "John Doe",
  lastLogin: new Date().toISOString(),
};

userData = JSON.stringify(userData);

document.cookie = `user=${userData}; expires:Fri, 31 Dec 2024 23:59:59 GMT; path=/`;

function getCookie(name) {
  let cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    if (name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  return null;
}

console.log(getCookie("user"));

document.cookie = `user=; expires:Fri, 31 Dec 2024 23:59:59 GMT; path=/`;

console.log(getCookie("user"));
