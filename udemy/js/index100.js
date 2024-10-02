// function Client(name, balance) {
//   this.name = name;
//   this.balance = balance;
//   this.membership = function () {
//     let name;

//     if (this.balance > 1000) {
//       name = "Glod";
//     } else if (this.balance > 500) {
//       name = "Platinum";
//     } else {
//       name = "Normal";
//     }
//     return name;
//   };
//   this.getClientInfo = function () {};
//   this.getBalance = function () {};
// }

function Client(name, balance) {
  this.name = name;
  this.balance = balance;
}

Client.prototype.membership = function () {
  let name;

  if (this.balance > 1000) {
    name = "Glod";
  } else if (this.balance > 500) {
    name = "Platinum";
  } else {
    name = "Normal";
  }
  return name;
};

Client.prototype.clientInfo = function () {
  return `Name : ${this.name} , Balance : ${this.balance}`;
};

// another method to withdraw
Client.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// create deposit method
Client.prototype.deposit = function (amount) {
  this.balance += amount;
};

Client.prototype.getBalance = function () {
  return this.balance;
};

const person = new Client("Monish", 2000);
const person2 = new Client("Payal", 700);

// console.log(Client.prototype);

console.log(person);
console.log(person.membership());
console.log(person.clientInfo());

// console.log(person2);
// console.log(person2.membership());
// console.log(person2.clientInfo());

person.withdraw(1000);
console.log(person.clientInfo());
person.deposit(4000);
console.log(person.clientInfo());

// Business
function Business(name, balance, phone, category) {
  Client.call(this, name, balance);
  this.phone = phone;
  this.category = category;
}

//Inherite the prototype
Business.prototype = Object.create(Client.prototype);

// Create a business
const business = new Business("Udemy", 10000, 999999999999, "Education");

console.log(business);
console.log(business.clientInfo());
