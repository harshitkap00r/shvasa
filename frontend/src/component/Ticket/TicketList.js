// TicketList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './TicketList.css';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchTickets = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/support-allTickets?page=${currentPage}`);
      setCurrentPage(prev => prev + 1);
      
      if (response.data.length === 0) {
        setHasMore(false);
      } else {
        setTickets(prev => [...prev, ...response.data]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching tickets:', error.response.data.error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <div className="ticket-list">
      <h2 className="heading">Ticket List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul style={{padding: '0px'}}>
            {tickets.map((ticket) => (
              <li key={ticket._id} className="ticket-item">
                <div>
                  <div className="ticket-details">
                    <div style={{ fontWeight: '300' }}>Topic</div>:
                    <div style={{ fontWeight: '600', marginLeft: '4px' }}>{ticket?.topic}</div>
                  </div>
                  <div className="ticket-details">
                    <div style={{ fontWeight: '300' }}>Description</div>:
                    <div style={{ fontWeight: '600', marginLeft: '4px' }}>{ticket?.description}</div>
                  </div>
                  <div className="ticket-details">
                    <div style={{ fontWeight: '300' }}>Severity</div>:
                    <div style={{ fontWeight: '600', marginLeft: '4px' }}>{ticket?.severity}</div>
                  </div>
                  <div className="ticket-details">
                    <div style={{ fontWeight: '300' }}>Type</div>:
                    <div style={{ fontWeight: '600', marginLeft: '4px' }}>{ticket?.type}</div>
                  </div>
                  <div className="ticket-details">
                    <div style={{ fontWeight: '300' }}>Assigned To</div>:
                    <div style={{ fontWeight: '600', marginLeft: '4px' }}>{ticket?.assignedTo}</div>
                  </div>
                  <div className="ticket-details">
                    <div style={{ fontWeight: '300' }}>Date Created</div>:
                    <div style={{ fontWeight: '600', marginLeft: '4px' }}>{ticket?.dateCreated}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {hasMore && (
            <button className="load-more-button" onClick={fetchTickets}>
              Load More
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default TicketList;
