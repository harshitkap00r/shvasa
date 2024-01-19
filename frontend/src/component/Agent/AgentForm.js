import React, { useState } from 'react';
import axios from 'axios';
import './AgentForm.css'; 

const AgentForm = () => {
  const [agentData, setAgentData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const createAgent = async () => {
    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^\d{10}$/;

      if (!agentData.name.trim()) {
        alert('Please enter a valid name');
        return;
      }

      if (!emailRegex.test(agentData.email)) {
        alert('Invalid email format');
        return;
      } 

      if (!phoneRegex.test(agentData.phone)) {
        alert('Invalid phone number format.');
        return;
      }

      if (!agentData.description.trim()) {
        alert('Please enter a valid description');
        return;
      }

      const response = await axios.post('http://localhost:8080/api/support-agents', agentData);
      console.log('Created Agent:', response);
      alert('Agent Created Successfully');
      setAgentData({ name: '', email: '', phone: '', description: '' });
    } catch (error) {
      console.error('Error creating agent:', error.response.data.error);
    }
  };

  return (
    <div className="agent-form-container">
      <h2 className="heading">Support Agent Creation Screen</h2>
      <div className="inputContainer">
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={agentData.name}
          onChange={(e) => setAgentData({ ...agentData, name: e.target.value })}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          value={agentData.email}
          onChange={(e) => setAgentData({ ...agentData, email: e.target.value })}
        />
        <input
          className="input"
          type="text"
          placeholder="Phone"
          value={agentData.phone}
          onChange={(e) => setAgentData({ ...agentData, phone: e.target.value })}
        />
        <input
          className="input"
          type="text"
          placeholder="Description"
          value={agentData.description}
          onChange={(e) => setAgentData({ ...agentData, description: e.target.value })}
        />
      </div>
      <button className="button" onClick={createAgent}>
        Create Agent
      </button>
    </div>
  );
};

export default AgentForm;
