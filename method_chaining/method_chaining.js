// object consecutively in a single statement. This is achieved by ensuring that each method returns the object itself (or a reference to the object), allowing subsequent method calls on the same object.

// Here's an example to illustrate method chaining in JavaScript:

class Calculator {
  constructor(value = 0) {
    this.value = value;
  }

  add(number) {
    this.value += number;
    return this; // Return the object itself to enable chaining
  }

  subtract(number) {
    this.value -= number;
    return this;
  }

  multiply(number) {
    this.value *= number;
    return this;
  }

  divide(number) {
    if (number !== 0) {
      this.value /= number;
    } else {
      console.log("Cannot divide by zero");
    }
    return this;
  }

  getResult() {
    console.log(this.value);
    return this.value;
  }
}

const calc = new Calculator();
calc.add(5).subtract(3).multiply(10).divide(2).getResult(); // Output: 10

// Key Points:
// Returning this: Each method returns this, allowing for chaining.
// Single Statement: Multiple operations are performed in one line, improving readability and conciseness.
// Advantages:
// Cleaner, more readable code.
// Fewer intermediate variables required to store results.
// This technique is common in libraries like jQuery, where methods can be chained for cleaner syntax.

// In a real-life e-commerce site, method chaining can be used in various parts of the application to streamline processes, especially in scenarios involving data manipulation, querying, and configuration building. Here's a breakdown of how method chaining might be used in an e-commerce system:

// 1. Product Search and Filtering
// In an e-commerce application, users often filter products based on multiple criteria, such as price range, categories, and ratings. Method chaining can simplify this filtering logic.

class ProductQuery {
  constructor(products) {
    this.products = products;
    this.filteredProducts = products;
  }

  filterByCategory(category) {
    this.filteredProducts = this.filteredProducts.filter(
      (product) => product.category === category
    );
    return this;
  }

  filterByPriceRange(minPrice, maxPrice) {
    this.filteredProducts = this.filteredProducts.filter(
      (product) => product.price >= minPrice && product.price <= maxPrice
    );
    return this;
  }

  filterByRating(minRating) {
    this.filteredProducts = this.filteredProducts.filter(
      (product) => product.rating >= minRating
    );
    return this;
  }

  sortByPrice(order = "asc") {
    this.filteredProducts.sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    return this;
  }

  getResults() {
    return this.filteredProducts;
  }
}

const products = [
  { name: "Laptop", category: "Electronics", price: 1000, rating: 4.5 },
  { name: "Shoes", category: "Fashion", price: 50, rating: 4.8 },
  { name: "Phone", category: "Electronics", price: 600, rating: 4.3 },
];

const query = new ProductQuery(products);

const results = query
  .filterByCategory("Electronics")
  .filterByPriceRange(500, 1500)
  .filterByRating(4.4)
  .sortByPrice("desc")
  .getResults();

console.log(results); // Output: [{ name: 'Laptop', category: 'Electronics', price: 1000, rating: 4.5 }]

// 2. Shopping Cart Operations
// Method chaining can be used in shopping cart management to add, remove, and update products efficiently in a single line.

class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(product, quantity) {
    this.items.push({ product, quantity });
    return this;
  }

  removeItem(productName) {
    this.items = this.items.filter((item) => item.product.name !== productName);
    return this;
  }

  updateQuantity(productName, quantity) {
    this.items = this.items.map((item) =>
      item.product.name === productName ? { ...item, quantity } : item
    );
    return this;
  }

  applyDiscount(code) {
    // Some discount logic based on the code
    console.log(`Discount ${code} applied`);
    return this;
  }

  checkout() {
    // Checkout logic
    console.log("Checking out", this.items);
    return this;
  }
}

const cart = new ShoppingCart();

cart
  .addItem({ name: "Laptop", price: 1000 }, 1)
  .addItem({ name: "Shoes", price: 50 }, 2)
  .updateQuantity("Shoes", 3)
  .applyDiscount("DISCOUNT10")
  .checkout();

//   3. Building an Order
// In the order management process, various configurations such as shipping methods, billing address, and payment details need to be added before confirming the order. Method chaining can streamline this process.

class Order {
  constructor() {
    this.orderDetails = {};
  }

  setCustomer(customerId) {
    this.orderDetails.customerId = customerId;
    return this;
  }

  setShippingAddress(address) {
    this.orderDetails.shippingAddress = address;
    return this;
  }

  setBillingAddress(address) {
    this.orderDetails.billingAddress = address;
    return this;
  }

  setShippingMethod(method) {
    this.orderDetails.shippingMethod = method;
    return this;
  }

  addPaymentMethod(paymentMethod) {
    this.orderDetails.paymentMethod = paymentMethod;
    return this;
  }

  confirmOrder() {
    // Order confirmation logic
    console.log("Order confirmed:", this.orderDetails);
    return this;
  }
}

const order = new Order();

order
  .setCustomer(12345)
  .setShippingAddress("123 Main St, City, Country")
  .setBillingAddress("456 Other St, City, Country")
  .setShippingMethod("Express")
  .addPaymentMethod("Credit Card")
  .confirmOrder();

//   4. User Profile Setup
// When a user registers or updates their profile on the e-commerce platform, method chaining can be used to set multiple properties in one go, like personal details, contact information, and preferences.

class UserProfile {
  constructor() {
    this.profile = {};
  }

  setName(name) {
    this.profile.name = name;
    return this;
  }

  setEmail(email) {
    this.profile.email = email;
    return this;
  }

  setPhoneNumber(phone) {
    this.profile.phone = phone;
    return this;
  }

  setPreferences(preferences) {
    this.profile.preferences = preferences;
    return this;
  }

  saveProfile() {
    console.log("Profile saved:", this.profile);
    return this;
  }
}

const user = new UserProfile();

user
  .setName("John Doe")
  .setEmail("john.doe@example.com")
  .setPhoneNumber("123-456-7890")
  .setPreferences({ theme: "dark", newsletter: true })
  .saveProfile();

//   Benefits of Method Chaining in E-commerce:
// Cleaner Code: Avoids intermediate variables and repeated code, making logic flow easier to follow.
// Fluent API Design: Offers a smooth and readable way to perform sequential operations, such as building queries, managing carts, and configuring orders.
// Reduced Complexity: Simplifies the execution of complex processes by breaking them into small methods, which are chained together logically.
// By adopting method chaining in scenarios like product filtering, shopping cart management, and user profile setup, e-commerce platforms can achieve better code structure, improve readability, and make the system more maintainable.
