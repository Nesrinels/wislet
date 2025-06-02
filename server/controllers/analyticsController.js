import Transaction from '../models/Transaction.js';
import mongoose from 'mongoose';

export const getBalanceHistory = async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id }).sort({ date: 1 });

    let balance = 0;
    const history = transactions.map(tx => {
      balance += tx.type === 'income' ? tx.amount : -tx.amount;
      return { date: tx.date, balance };
    });

    res.json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getExpensesByCategory = async (req, res) => {
  try {
    const result = await Transaction.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(req.user.id), type: 'expense' } },
      {
        $group: {
          _id: '$category',
          total: { $sum: '$amount' },
        }
      },
      {
        $lookup: {
          from: 'categories',
          localField: '_id',
          foreignField: '_id',
          as: 'category'
        }
      },
      { $unwind: '$category' },
      {
        $project: {
          _id: 0,
          category: '$category.name',
          total: 1
        }
      }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getTotalExpenses = async (req, res) => {
  try {
    const result = await Transaction.aggregate([
      { $match: { user: new mongoose.Types.ObjectId(req.user.id), type: 'expense' } },
      { $group: { _id: null, total: { $sum: '$amount' } } }
    ]);

    res.json({ total: result[0]?.total || 0 });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMonthlySpending = async (req, res) => {
  try {
    const result = await Transaction.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(req.user.id),
          type: 'expense'
        }
      },
      {
        $group: {
          _id: { $month: '$date' },
          total: { $sum: '$amount' }
        }
      },
      {
        $project: {
          month: '$_id',
          total: 1,
          _id: 0
        }
      },
      { $sort: { month: 1 } }
    ]);

    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
