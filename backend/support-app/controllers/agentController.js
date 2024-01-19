const Agent = require('../models/Agent');

exports.createAgent = async (req, res) => {
  try {
    const newAgent = await Agent.create(req.body);
    res.json(newAgent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
