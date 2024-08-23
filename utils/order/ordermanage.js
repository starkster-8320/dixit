const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  billno: { type: String, required: true },
  store: { type: String, required: true },
  datetime: { type: Date, required: true },
  totalproduct: { type: Number, required: true },
  totalamount: { type: Number, required: true },
  paidstatus: { type: String, required: true },
});

module.exports = mongoose.model('Order', OrderSchema);