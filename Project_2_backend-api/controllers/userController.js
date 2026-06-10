const store = require('../data/store');

// ─── GET /api/users ───────────────────────────────────────
// Returns all users
const getAllUsers = (req, res) => {
  res.status(200).json({
    success: true,
    count: store.users.length,
    data: store.users,
  });
};

// ─── GET /api/users/:id ───────────────────────────────────
// Returns a single user by ID
const getUserById = (req, res) => {
  const id   = parseInt(req.params.id);
  const user = store.users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ success: false, error: `User with id ${id} not found` });
  }

  res.status(200).json({ success: true, data: user });
};

// ─── POST /api/users ──────────────────────────────────────
// Creates a new user
const createUser = (req, res) => {
  const { name, email, role = 'user' } = req.body;

  // Semantic check: duplicate email?
  const exists = store.users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ success: false, error: 'Email already exists' });
  }

  const newUser = {
    id: store.getNextUserId(),
    name,
    email,
    role,
  };

  store.users.push(newUser);

  res.status(201).json({
    success: true,
    message: 'User created successfully',
    data: newUser,
  });
};

// ─── DELETE /api/users/:id ────────────────────────────────
// Deletes a user by ID
const deleteUser = (req, res) => {
  const id    = parseInt(req.params.id);
  const index = store.users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, error: `User with id ${id} not found` });
  }

  store.users.splice(index, 1);
  res.status(204).send(); // 204 No Content — deleted successfully
};

module.exports = { getAllUsers, getUserById, createUser, deleteUser };
