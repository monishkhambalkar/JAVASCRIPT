// 1. Shopping Cart Total Calculation:
// Calculate the total price in a shopping cart by iterating over each item’s price.

let cart = [{ price: 20 }, { price: 30 }, { price: 50 }];
let total = 0;
for (var i = 0; i < cart.length; i++) {
  total += cart[i]["price"];
}
console.log(total);

// 2. Generate Unique User IDs:
// Generate unique IDs by iterating a fixed number of times, creating usernames like user1, user2, etc.
let users = [];
for (var i = 0; i < 5; i++) {
  users.push(`user${i}`);
}
console.log(users);
