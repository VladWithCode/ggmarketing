const { Schema, model, Types } = require('mongoose');

const PlanSchema = new Schema({
  name: { type: String, required: true, unique: true },
  stripe_id: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  subscribers: [{ type: Types.ObjectId, ref: 'Customer' }],
  subscriberCount: { type: Number, default: 0 },
  lastSubscribed: Number,
  available: { type: Boolean, default: true },
})

module.exports = model('Plan', PlanSchema);
