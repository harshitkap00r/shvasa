const express = require('express');
const agentController = require('../controllers/agentController');

const router = express.Router();

router.post('/api/support-agents', agentController.createAgent);

module.exports = router;
