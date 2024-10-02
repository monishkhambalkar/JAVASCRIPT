// class
class Client {
  // to the constructor
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  membership() {
    if (this.balance > 1000) {
      name = "Glod";
    } else if (this.balance > 500) {
      name = "Platinum";
    } else {
      name = "Normal";
    }
    return name;
  }

  clientInfo() {}
}
