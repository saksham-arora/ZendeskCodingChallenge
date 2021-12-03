import React from "react";
import Ticket from "./Ticket";
import "./TicketList.css";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";

function renderTickets(ticket) {
  return <Ticket key={ticket.id} ticket={ticket} />;
}

function TicketList() {
  const [TicketsState, setTicketsState] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong while requesting tickets!");
      })
      .then((jsonResponse) => {
        setTicketsState(jsonResponse);
      })
      .catch((error) => {});
  }, []);

  return (
    // <Pagination data={TicketsState} />
    // <div>{Pagination(TicketsState)}</div>
    <div className="ticket_list">
    <div className="ticket_list_component">

      {TicketsState.map(renderTickets)}

      <Navigation setType={setTicketsState} />
    </div>
    </div>
  );
}

export default TicketList;
