const Ticket = require('../models/Ticket');
const Agent = require('../models/Agent');

let lastAssignedAgentIndex = -1;

exports.createTicket = async (req, res) => {
  try {
    const allAgents = await Agent.find();

    if (allAgents.length === 0) {
      return res.status(400).json({ error: 'No agents available' });
    }

    lastAssignedAgentIndex = (lastAssignedAgentIndex + 1) % allAgents.length;
    const assignedTo = allAgents[lastAssignedAgentIndex]._id;

    const newTicket = await Ticket.create({
      ...req.body,
      assignedTo,
      status: 'Assigned',
    });

    res.json(newTicket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find().skip(4 * req?.query?.page).limit(4);
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
