const { Schema, model, Types } = require('mongoose');

const CustomerSchema = new Schema({
  name: { type: String, required: true },
  pSurname: { type: String, required: true },
  mSurname: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },  
});

module.exports = model('Customer', CustomerSchema);

