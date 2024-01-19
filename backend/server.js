const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const agentRoutes = require('./support-app/routes/agentRoutes');
const ticketRoutes = require('./support-app/routes/ticketRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://shasa:shasa@shasa.iknoe.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// API Endpoints
app.use(agentRoutes);
app.use(ticketRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
