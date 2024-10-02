let shoppingCart = new Set();

shoppingCart.add("1");
shoppingCart.add("2");
shoppingCart.add("4");
shoppingCart.add("3");

console.log(shoppingCart.size);
console.log(shoppingCart.has("3"));
shoppingCart.delete("2");
console.log(shoppingCart.size);

shoppingCart.forEach((product, index, isPart) => {
  console.log(`${index} : ${product}`);
  console.log(isPart === shoppingCart);
});

const arrayCart = [...shoppingCart];

console.log(arrayCart);

console.log(shoppingCart);
