// expenseDetailSchema.js
const { Schema, model } = require('mongoose');

const expenseDetail = new Schema({
  item: String,
  date: {
    type: Date,
    default: Date.now
  },
  description: String,
  notes: String,
  document: {
    data: Buffer,
    contentType: String
  },
  metadata: String,
  categoryId: Number,
  spend: Number
});

module.exports = model('ExpenseDetail', expenseDetail);
