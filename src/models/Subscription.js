const { Schema, model, Types } = require('mongoose');

const SubscriptionSchema = new Schema({
  customer: { type: Types.ObjectId, required: true },
  plan: { type: Types.ObjectId, ref: 'Plan', required: true },
  active: { type: Boolean, default: true },
  createdAt: { type: Number, default: Date.now() },
  lastModified: { type: Number, default: Date.now() },
  endsAt: Number,
  stripe_id: String,
  paymentMethod: {
    stripe_id: String,
    last4: Number
  },
  lastPayedAt: { type: Number, default: Date.now() },
  latestInvoiceURL: String
});

module.exports = model('Subscription', SubscriptionSchema);
