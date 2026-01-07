
function memoizeCartTotal(fn){

    const cache = {};

    return function (cartItem){
        const key = JSON.stringify(cartItem);
        // console.log(key); 

        if (cache[key]) {
            console.log("returning from cache");
            // console.log(cache[key]);
            return cache[key];
        }
        console.log("Calculating cart total...");
        const result = fn(cartItem);
        // console.log(result)
        cache[key] = result;
        return result;
    }

}

const fetchCartTTotal = memoizeCartTotal((cartItem)=>{
    return cartItem.reduce((total, item)=>total + (item.price*item.qty),0)
})
console.log(fetchCartTTotal([{price:500, qty:2}, {price:1000, qty:1}]));
console.log(fetchCartTTotal([{price:500, qty:2}, {price:1000, qty:1}])); // Cached
