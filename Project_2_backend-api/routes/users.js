const express = require('express');
const router  = express.Router();

const { getAllUsers, getUserById, createUser, deleteUser } = require('../controllers/userController');
const { validateUser } = require('../middleware/validate');

// GET    /api/users        → get all users
// POST   /api/users        → create a new user  (with validation)
// GET    /api/users/:id    → get one user
// DELETE /api/users/:id    → delete a user

router.get('/',     getAllUsers);
router.post('/',    validateUser, createUser);
router.get('/:id',  getUserById);
router.delete('/:id', deleteUser);

module.exports = router;
