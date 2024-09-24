const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  billingAddress: String,
  balance: Number,
});

module.exports = mongoose.model('Customer', customerSchema);