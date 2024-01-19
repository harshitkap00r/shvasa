const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  topic: String,
  description: String,
  dateCreated: { type: Date, default: Date.now },
  severity: String,
  type: String,
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
  status: { type: String, default: 'New' },
  resolvedOn: Date,
});

const Ticket = mongoose.model('Ticket', ticketSchema);

module.exports = Ticket;
