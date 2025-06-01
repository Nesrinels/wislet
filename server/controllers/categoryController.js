import Category from '../models/Category.js';

// Create new category
export const createCategory = async (req, res) => {
  try {
    const { name, type, icon } = req.body;
    const category = await Category.create({
      name: name.toLowerCase(),
      type,
      icon,
      user: req.user.id,
    });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get user categories
export const getUserCategories = async (req, res) => {
  try {
    const categories = await Category.find({ user: req.user.id });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
