// ─── Validation Middleware ────────────────────────────────
// "The Gatekeeper Rule: Never Trust the Client." - DecodeLabs

// Validate user input for POST /api/users
const validateUser = (req, res, next) => {
  const { name, email, role } = req.body;
  const errors = [];

  // Syntactic validation – are all required fields present?
  if (!name)  errors.push('name is required');
  if (!email) errors.push('email is required');

  // Syntactic validation – is the email format correct?
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    errors.push('email format is invalid');
  }

  // Semantic validation – is the role a valid value?
  const allowedRoles = ['admin', 'user'];
  if (role && !allowedRoles.includes(role)) {
    errors.push(`role must be one of: ${allowedRoles.join(', ')}`);
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  next(); // All good — pass to the controller
};

// Validate product input for POST /api/products
const validateProduct = (req, res, next) => {
  const { name, price, category, stock } = req.body;
  const errors = [];

  if (!name)     errors.push('name is required');
  if (!price)    errors.push('price is required');
  if (!category) errors.push('category is required');

  if (price && (isNaN(price) || price <= 0)) {
    errors.push('price must be a positive number');
  }

  if (stock !== undefined && (isNaN(stock) || stock < 0)) {
    errors.push('stock must be a non-negative number');
  }

  if (errors.length > 0) {
    return res.status(400).json({ error: 'Validation failed', details: errors });
  }

  next();
};

module.exports = { validateUser, validateProduct };
