import mongoose from 'mongoose';
import Transaction from '../models/Transaction.js';
import Category from '../models/Category.js';
import { sendNotificationEmail } from '../utils/emailService.js';

/* ─────────────────────────  CREATE  ───────────────────────── */
export const createTransaction = async (req, res) => {
  try {
    const { type, amount, category, description, currency, date } = req.body;

    if (!type || !amount || !category) {
      return res
        .status(400)
        .json({ message: 'Type, amount, and category are required' });
    }

    //  the category field coming in the body is **an ObjectId string**
    const foundCategory = await Category.findOne({
      _id: category,
      user: req.user.id,
    });

    if (!foundCategory) {
      return res
        .status(404)
        .json({ message: 'Category not found or not yours' });
    }

    if (foundCategory.type !== type) {
      return res.status(400).json({
        message: `Category type mismatch. This category is for “${foundCategory.type}” transactions.`,
      });
    }

    const transaction = await Transaction.create({
      user: req.user.id,
      type,
      amount,
      category,
      description,
      currency,
      date,
    });

    // Send notification email
await sendNotificationEmail({
  to: req.user.email, // assuming you're attaching user's email in auth middleware
  subject: 'New Income/Expense Logged',
  text: `Hi ${req.user.username || ''},\n\nYou successfully added a new ${type} transaction of ${amount} ${currency || ''} in category "${foundCategory.name}".\n\nDescription: ${description || '—'}\nDate: ${new Date(date).toLocaleDateString()}\n\nThank you for using Wislet!`,
});

    res.status(201).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ────────────────────────  GET MANY  ──────────────────────── */
export const getTransactions = async (req, res) => {
  try {
    const { category } = req.query; // name, e.g. “groceries”
    const filter = { user: req.user.id };

    if (category) {
      const normalized = category.trim().toLowerCase();

      // find the category document that belongs to this user & matches name
      const foundCategory = await Category.findOne({
        name: { $regex: new RegExp(`^${normalized}$`, 'i') },
        user: req.user.id,
      });

      if (!foundCategory) {
        return res
          .status(404)
          .json({ message: `Category “${category}” not found` });
      }

      filter.category = foundCategory._id;
    }

    const transactions = await Transaction.find(filter)
      .populate('category', 'name type icon')
      .sort({ date: -1 });

    // temporary debug
    console.log('Filter used →', filter);
    console.log('Returned →', transactions.length, 'transaction(s)');

    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ─────────────────────────  GET ONE  ───────────────────────── */
export const getTransactionById = async (req, res) => {
  try {
    const transaction = await Transaction.findOne({
      _id: req.params.id,
      user: req.user.id,
    }).populate('category', 'name type icon'); // ← fixed populate

    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }

    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ─────────────────────────  UPDATE  ───────────────────────── */
export const updateTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    ).populate('category', 'name type icon');

    if (!transaction) {
      return res
        .status(404)
        .json({ message: 'Transaction not found or not yours' });
    }

    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ─────────────────────────  DELETE  ───────────────────────── */
export const deleteTransaction = async (req, res) => {
  try {
    const transaction = await Transaction.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!transaction) {
      return res
        .status(404)
        .json({ message: 'Transaction not found or not yours' });
    }

    res.status(200).json({ message: 'Transaction deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

/* ───────────   GET ALL BY CATEGORY ID ROUTE  ────────── */
export const getTransactionsByCategory = async (req, res) => {
  try {
    const transactions = await Transaction.find({
      user: req.user.id,
      category: req.params.categoryId,
    }).populate('category', 'name type icon');

    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
