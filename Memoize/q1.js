function memoizeProductDetails(fn){

    const cache = JSON.parse(localStorage.getItem("cartCache") || "{}");

    return async function(product){
        if (cache[product]) {
            console.log("Using cached product details");
            return cache[product]
        }
        const result = await fn(product);
        cache[product] = result;
        localStorage.setItem("cartCache", JSON.stringify(cache));

        return result;
    }


}
async function fetchProduct(product){
    const res= await fetch(`https://fakestoreapi.com/products/${product}`)
    return await res.json();
}

const getProduct = memoizeProductDetails(fetchProduct)
getProduct(1).then(console.log)
getProduct(2).then(console.log)
getProduct(1).then(console.log)