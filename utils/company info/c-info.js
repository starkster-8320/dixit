const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  chargeAmount: { type: Number, required: true },
  vatCharge: { type: Number, required: true },
  address: { type: String, required: true },
  phoneNo: { type: String, required: true },
  country: { type: String, required: true },
  message: { type: String, required: true },
  currency: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);
