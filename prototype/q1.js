const user = {name : "Monish"};


// console.log(user.toString());



function users(name){

    this.name = name;
    this.login = function() {
        console.log(this.name + " logged in ");
        return this.name + " logged in ";
    }

}


let userLogin = new users("Monish");
console.log(userLogin.login())

function Product(name, price){
    this.name = name;
    this.price = price;
}

Product.prototype.getPrice = function(){
    return this.price * 20;
}

Product.prototype.getname = function(){
    return this.name;
}

const p1 = new Product("Mobile", 20000);
const p2 = new Product("Laptop", 60000);

console.log(p1.getname());
console.log(p1.getPrice());
console.log(p2.getPrice());