const { Schema, model, Types } = require('mongoose');

const bcrypt = require('bcrypt');

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  pass: { type: String },
  subscriptionActive: { type: Boolean, default: false },
  subscription: { type: Types.ObjectId, ref: 'Subscription' },
  stripe_customer_id: { type: String }
});

CustomerSchema.pre('save', async function(next) {
  if (!this.isModified('pass')) return next();

  try {
    this.pass = await bcrypt.hash(this.pass, 10);
  } catch (err) {
    console.log(err)
    return next();
  }
});

CustomerSchema.methods.validatePass = async function(pw) {
  return await bcrypt.compare(pw, this.pass);
}

module.exports = model('Customer', CustomerSchema);
