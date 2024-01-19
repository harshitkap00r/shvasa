import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AgentForm from './component/Agent/AgentForm';
import TicketForm from './component/Ticket/TicketForm';
import Home from './component/Home/Home';

function RouterApp() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/agent' element={<AgentForm />} />
            <Route path='/ticket' element={<TicketForm />} />
        </Routes>
    </Router>
  )
}

export default RouterApp;