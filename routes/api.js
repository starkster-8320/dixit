const express = require('express');
const router = express.Router();

// Import API controllers here

// Create
router.post('/crm', createReview);

// Read
router.get('/crm', getReviews);
router.get('/crm/:id', getReviewById);

// Update
router.put('/crm/:id', updateReview);

// Delete
router.delete('/crm/:id', deleteReview);

module.exports = router;