const { Schema, model, Types } = require('mongoose');

const PlanSchema = new Schema({
  name: { type: String, required: true },
  code: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  suscriberCount: { type: Number, default: 0 },
})

module.exports = model('Plan', PlanSchema);
