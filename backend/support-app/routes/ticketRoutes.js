const express = require('express');
const ticketController = require('../controllers/ticketController');

const router = express.Router();

router.post('/api/support-tickets', ticketController.createTicket);
router.get('/api/support-allTickets', ticketController.getAllTickets);

module.exports = router;
