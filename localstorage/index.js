// script.js
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsElement = document.getElementById("cart-items");
  const cartTotalElement = document.getElementById("cart-total");

  function loadCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function updateCartDisplay(cart) {
    cartItemsElement.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
      cartItemsElement.appendChild(li);
      total += item.price * item.quantity;
    });

    cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
  }

  function addToCart(product) {
    const cart = loadCart();
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    updateCartDisplay(cart);
  }

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productElement = button.closest(".product");
      const product = {
        id: productElement.getAttribute("data-id"),
        name: productElement.getAttribute("data-name"),
        price: parseFloat(productElement.getAttribute("data-price")),
      };

      addToCart(product);
    });
  });

  // Load and display cart on page load
  updateCartDisplay(loadCart());
});
