const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
  plate: { type: String, required: true },  
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  transport: { type: Schema.Types.ObjectId, ref: 'Transport' },
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Vehicle', vehicleSchema );
