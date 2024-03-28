const express = require('express');
const router = express.Router();
const baseController = require('../controllers/index.js');

router.get('/', baseController.handle);

module.exports = router;
