const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  time: { type: String },
  store: { type: String, required: true },
  table: { type: String, required: true },
  products: [
    {
      product: { type: String, required: true },
      quantity: { type: Number, required: true },
      rate: { type: Number, required: true },
      amount: { type: Number, required: true }
    }
  ],
  grossAmount: { type: Number, required: true },
  discount: { type: Number },
  netAmount: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);