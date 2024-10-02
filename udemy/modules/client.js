// client.js
export const client = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  phone: "+1234567890",
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    postalCode: "12345",
    country: "USA",
  },
  registeredDate: "2024-08-13",
  isActive: true,
  purchases: [
    {
      purchaseId: 101,
      date: "2024-08-01",
      amount: 250.0,
      items: [
        { itemId: 1, name: "Laptop", price: 200.0 },
        { itemId: 2, name: "Mouse", price: 50.0 },
      ],
    },
    {
      purchaseId: 102,
      date: "2024-08-10",
      amount: 150.0,
      items: [
        { itemId: 3, name: "Keyboard", price: 100.0 },
        { itemId: 4, name: "Headphones", price: 50.0 },
      ],
    },
  ],
  notes: "Preferred contact method: email",
  loyaltyPoints: 1500,
};

export const myName = "Monish";
