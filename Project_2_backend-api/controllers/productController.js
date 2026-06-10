const store = require('../data/store');

// ─── GET /api/products ────────────────────────────────────
// Returns all products (supports ?category= filter)
const getAllProducts = (req, res) => {
  let results = store.products;

  // Optional query filter: GET /api/products?category=electronics
  if (req.query.category) {
    results = results.filter(p =>
      p.category.toLowerCase() === req.query.category.toLowerCase()
    );
  }

  res.status(200).json({
    success: true,
    count: results.length,
    data: results,
  });
};

// ─── GET /api/products/:id ────────────────────────────────
const getProductById = (req, res) => {
  const id      = parseInt(req.params.id);
  const product = store.products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ success: false, error: `Product with id ${id} not found` });
  }

  res.status(200).json({ success: true, data: product });
};

// ─── POST /api/products ───────────────────────────────────
const createProduct = (req, res) => {
  const { name, price, category, stock = 0 } = req.body;

  const newProduct = {
    id: store.getNextProductId(),
    name,
    price: parseFloat(price),
    category,
    stock: parseInt(stock),
  };

  store.products.push(newProduct);

  res.status(201).json({
    success: true,
    message: 'Product created successfully',
    data: newProduct,
  });
};

// ─── DELETE /api/products/:id ─────────────────────────────
const deleteProduct = (req, res) => {
  const id    = parseInt(req.params.id);
  const index = store.products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: `Product with id ${id} not found` });
  }

  store.products.splice(index, 1);
  res.status(204).send();
};

module.exports = { getAllProducts, getProductById, createProduct, deleteProduct };
