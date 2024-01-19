import React, { useState } from "react";
import axios from "axios";
import "./TicketForm.css";
import TicketList from "./TicketList";

const TicketForm = () => {
  const [ticketData, setTicketData] = useState({
    topic: "",
    description: "",
    severity: "",
    type: "",
  });

  const createTicket = async () => {
    try {

      if (!ticketData.topic.trim()) {
        alert('Please enter a valid topic');
        return;
      }

      if (!ticketData.description.trim()) {
        alert('Invalid description format');
        return;
      }

      if (!ticketData.severity.trim()) {
        alert('Invalid severity format.');
        return;
      }

      if (!ticketData.type.trim()) {
        alert('Please enter a valid type');
        return;
      }
      const response = await axios.post(
        "http://localhost:8080/api/support-tickets",
        ticketData
      );
      console.log(response)

      console.log("Created Ticket:", response.data);
      alert("Ticket created Successfully");
      setTicketData({ topic: "", description: "", severity: "", type: "" });

    } catch (error) {
      console.log(error)
      alert(error.response.data.error);
      console.error("Error creating ticket:", error.response.data.error);
    }
  };

  return (
    <div className="ticket-form-container">
      <h2 className="heading">Support Ticket Entry Screen</h2>
      <div className="inputContainer">
        <input
          type="text"
          className="input"
          placeholder="Topic*"
          value={ticketData.topic}
          onChange={(e) =>
            setTicketData({ ...ticketData, topic: e.target.value })
          }
        />
        <input
          placeholder="Description*"
          className="input"
          value={ticketData.description}
          onChange={(e) =>
            setTicketData({ ...ticketData, description: e.target.value })
          }
        />
        <select
          className="input"
          value={ticketData.severity}
          onChange={(e) =>
            setTicketData({ ...ticketData, severity: e.target.value })
          }
        >
          <option value="" disabled selected>
            Select Severity*
          </option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <input
          type="text"
          className="input"
          placeholder="Type*"
          value={ticketData.type}
          onChange={(e) =>
            setTicketData({ ...ticketData, type: e.target.value })
          }
        />
        <button className="button" onClick={createTicket}>
          Create Ticket
        </button>
      </div>

      <TicketList />
    </div>
  );
};

export default TicketForm;
