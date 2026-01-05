// const { use } = require("react");

// function processOrder(callback){

//     console.log("Processing order...");
//     callback();

// }

// function orderCompleted(){
//     console.log("Order completed successfully.");
// }

// processOrder(orderCompleted)



// function mainTask(callback){

//     setTimeout(()=>{
//         callback("Task completed")
//     },5000)
// }

// mainTask(function(result){
//     console.log(result)
// })




// 1 real life problem
// function loginUser(email, callback) {
//     setTimeout(() => {
//         callback({ userId: 101, email });
//     }, 1000);
// }

// loginUser("user@gmail.com", function(user) {
//     console.log("User logged in:", user);
// });

// 2: Add Product to Cart

function addTocart(productID, callback){
    console.log("Adding product to cart....");
    setTimeout(function(){
        callback("Product added to cart successfully");
    }, 2000);
}
addTocart(22, function(message){
    console.log(message);
});