
//inhetritance 

function Payment(amount) {
  this.amount = amount;
}

Payment.prototype.process = function () {
  console.log("Processing payment:", this.amount);
};

function CardPayment(amount) {
  Payment.call(this, amount);
}

CardPayment.prototype = Object.create(Payment.prototype);

console.log(new CardPayment(1000).process());