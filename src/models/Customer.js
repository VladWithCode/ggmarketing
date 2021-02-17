const { Schema, model, Types } = require('mongoose');

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  pass: { type: String },
  subscriptionActive: { type: Boolean, default: false },
  subscription: { type: Types.ObjectId, ref: 'Subscription' },
  stripe_customer_id: { type: String }
});

module.exports = model('Customer', CustomerSchema);
