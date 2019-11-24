const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transportSchema = new Schema({
  name: { type: String, required: true }  
});

module.exports = mongoose.model('Transport', transportSchema );
