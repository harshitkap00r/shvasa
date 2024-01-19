import React from "react";
import "./Home.css";

function Home() {

  const navigateToAgentPage = () => {
    window.location.href = "/agent";
  };

  const navigateToTicketPage = () => {
    window.location.href = "/ticket";
  };

  return (
    <div className="home">
      <div className="homeCard homeAgent" onClick={navigateToAgentPage}>
        <h2>Support Agent</h2>
      </div>
      <div className="homeCard homeTicket" onClick={navigateToTicketPage}>
        <h2>Support Ticket</h2>
      </div>
    </div>
  );
}

export default Home;
