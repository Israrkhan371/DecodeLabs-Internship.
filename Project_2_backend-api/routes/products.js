const express = require('express');
const router  = express.Router();

const { getAllProducts, getProductById, createProduct, deleteProduct } = require('../controllers/productController');
const { validateProduct } = require('../middleware/validate');

// GET    /api/products               → get all products
// GET    /api/products?category=xyz  → filter by category
// POST   /api/products               → create a new product (with validation)
// GET    /api/products/:id           → get one product
// DELETE /api/products/:id           → delete a product

router.get('/',       getAllProducts);
router.post('/',      validateProduct, createProduct);
router.get('/:id',    getProductById);
router.delete('/:id', deleteProduct);

module.exports = router;
