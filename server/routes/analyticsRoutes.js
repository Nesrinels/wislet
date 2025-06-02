import express from 'express';
import {
  getBalanceHistory,
  getExpensesByCategory,
  getTotalExpenses,
  getMonthlySpending,
} from '../controllers/analyticsController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(protect);

router.get('/balance-history', getBalanceHistory);
router.get('/expenses-by-category', getExpensesByCategory);
router.get('/total-expenses', getTotalExpenses);
router.get('/monthly-spending', getMonthlySpending);

export default router;