const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  invoiceNumber: { type: String, unique: true },
  invoiceDate: Date,
  stateOfSupply: String,
  items: [
    {
      name: String,
      quantity: Number,
      unitPrice: Number,
      discountPercentage: Number,
      taxPercentage: Number,
      totalBeforeTax: Number,
      totalAfterTax: Number,
    }
  ],
  totalAmount: Number,
  roundOff: Number,
  finalTotal: Number
});

module.exports = mongoose.model('Invoice', invoiceSchema);