// ─── In-Memory Data Store (acts like a simple database) ──
// In a real project this would be replaced by MongoDB/MySQL etc.

let users = [
  { id: 1, name: 'Alice Khan',   email: 'alice@example.com', role: 'admin' },
  { id: 2, name: 'Bob Ahmed',    email: 'bob@example.com',   role: 'user'  },
  { id: 3, name: 'Sara Malik',   email: 'sara@example.com',  role: 'user'  },
];

let products = [
  { id: 1, name: 'Laptop',    price: 75000, category: 'electronics', stock: 10 },
  { id: 2, name: 'Headphones', price: 3500,  category: 'electronics', stock: 25 },
  { id: 3, name: 'Notebook',   price: 150,   category: 'stationery',  stock: 100 },
];

// Simple auto-increment ID helpers
let nextUserId    = 4;
let nextProductId = 4;

module.exports = {
  users,
  products,
  getNextUserId:    () => nextUserId++,
  getNextProductId: () => nextProductId++,
};
