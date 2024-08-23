const express = require('express');
const router = express.Router();
const { createOrder, getOrder } = require('../controllers/OrderController');

router.post('/', createOrder);
router.get('/:id', getOrder);

module.exports = router;