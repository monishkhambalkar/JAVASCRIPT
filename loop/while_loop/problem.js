let attempts = 3;
let correctPassword = "password";
let enterPass;
while (attempts > 0 && enterPass !== correctPassword) {
  enterPass = prompt("Enter your password");
  attempts--;
}
