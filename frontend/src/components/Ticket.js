import React from "react";
import "./Ticket.css";
import "./DetailedTicket";
import { Link } from "react-router-dom";

function Ticket(props) {
  function getDate() {
    var date = new Date(props.ticket.created_at);
    return date.toDateString();
  }
  // <Link to={{ pathname: "/route", query: { foo: "bar" } }}>My route</Link>;
  function splitURL() {
    var url_array = props.ticket.url.split("/");
    return url_array[url_array.length - 1];
  }
  return (
    <Link className="link" to={{ pathname: `/ticket/${splitURL()}` }}>
      <div className="ticket_component">
        <span>{props.ticket.id} &ensp;</span>
        <span>{getDate()}</span>
        <h3>{props.ticket.subject}</h3>
        <p>
          {props.ticket.tags.map((tag) => {
            return <span>{"   " + tag}</span>;
          })}
        </p>
      </div>
    </Link>
  );
}

export default Ticket;
