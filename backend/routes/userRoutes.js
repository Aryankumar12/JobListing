// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController'); // Ensure these names match exactly with the exports in userController.js
const protect  = require('../middleware/authMiddleware');

router.post('/register', registerUser); // Register user
router.post('/login', loginUser); // Login user
router.get('/profile', protect, getUserProfile); // Get user profile

module.exports = router;
