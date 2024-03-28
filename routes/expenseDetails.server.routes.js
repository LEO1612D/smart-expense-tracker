const express = require('express');
const router = express.Router();

const ExpenseDetail = require('../controllers/expenseDetails.server.controller');

// Main Routes
router.route('/expenses/')
    .get(ExpenseDetail.list);

module.exports = router;

