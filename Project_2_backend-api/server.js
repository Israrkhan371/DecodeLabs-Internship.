const express = require('express');
const app = express();

// ─── Middleware ───────────────────────────────────────────
app.use(express.json()); // Parse incoming JSON requests

// ─── Routes ──────────────────────────────────────────────
const userRoutes    = require('./routes/users');
const productRoutes = require('./routes/products');

app.use('/api/users',    userRoutes);
app.use('/api/products', productRoutes);

// ─── Root endpoint ────────────────────────────────────────
app.get('/', (req, res) => {
  res.json({
    message: 'DecodeLabs Backend API is running!',
    version: '1.0.0',
    endpoints: {
      users:    '/api/users',
      products: '/api/products',
    },
  });
});

// ─── 404 Handler ─────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// ─── Global Error Handler ─────────────────────────────────
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// ─── Start Server ─────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
