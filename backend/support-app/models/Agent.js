const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  description: String,
  active: { type: Boolean, default: true },
  dateCreated: { type: Date, default: Date.now }
});


const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;