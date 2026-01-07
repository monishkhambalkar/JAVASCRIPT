function User(name){
    this.name = name;   
}

User.prototype.login = function(){
    return this.name + " login user";
}

function Admin(name){
    User.call(this, name)
}

Admin.prototype = Object.create(User.prototype);

console.log(new Admin("Monish").login())