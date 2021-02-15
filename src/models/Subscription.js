const { Schema, model, Types } = require('mongoose');

const SubscriptionSchema = new Schema({
  customer: { type: Types.ObjectId, required: true },
  plan: { type: Types.ObjectId, ref: 'Plan', required: true },
  active: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now() },
  lastModified: { type: Date, default: Date.now() },
  
});

module.exports = model('Subscription', SubscriptionSchema);
