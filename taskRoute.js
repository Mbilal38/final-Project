// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasks } = require('./controllers');
const { protect } = require('./authMiddleware');
const roleCheck = require('./roleMiddleware');

const router = express.Router();

router.route('/')
    .get(protect, getTasks)
    .post(protect, roleCheck(['manager', 'admin']), createTask);

// Add routes for updating, deleting tasks here.

module.exports = router;
