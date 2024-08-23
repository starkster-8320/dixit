const express = require('express');
const router = express.Router();
const category = require('../category/category');

// Get all users
router.get('/', async (req, res) => {
  try {
    const category = await category.find();
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a single user
router.get('/:id', getcategory, (req, res) => {
  res.json(res.category);
});

// Create a new user
router.post('/', async (req, res) => {
  const category = new category(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newcategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a user
router.patch('/:id', getcategory, async (req, res) => {
  Object.assign(res.category, req.body);
  try {
    const updatedUser = await res.category.save();
    res.json(updatedcategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a user
router.delete('/:id', getcategory, async (req, res) => {
  try {
    await res.category.remove();
    res.json({ message: 'Deleted category' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getcategory(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: 'Cannot find category' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.category = category;
  next();
}

module.exports = router;