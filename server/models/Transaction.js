import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    enum: ['income', 'expense'],
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  currency: {
    type: String,
    default: 'USD' // Can be determined based on user later
  },
  date: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Transaction', transactionSchema);
