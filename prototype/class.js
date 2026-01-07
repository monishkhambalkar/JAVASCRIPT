class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    login(){
        return `${this.name} user logged in`;
    }

    logout(){
        return `${this.name} user logged out`;
    }
}


class Customer extends User{
    placeOrder(product){
        return `user ${this.name} placed an order for ${product}`;
    }
}

class Admin extends User {
  addProduct(product) {
    console.log(`${this.name} added product ${product}`);
  }
}

const customer1 = new Customer("Monish", "monish@gmail.com");
const admin1 = new Admin("Rahul", "rahul@admin.com");

customer1.login();               // from User prototype
customer1.placeOrder("iPhone");  // from Customer prototype

admin1.login();                  // from User prototype
admin1.addProduct("MacBook");    // from Admin prototype
