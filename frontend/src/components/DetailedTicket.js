import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DetailedTicket.css";
import {useHistory} from "react-router-dom";



function DetailedTicket() {
  
  const history = useHistory();

  const [DetailedTicketState, setDetailedTicketState] = useState({
    tags: [],
  });
  const { url } = useParams();

  function handleClose(){


  }

  useEffect(() => {
    fetch(`http://localhost:4000/ticket?ticket=${url}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Something went wrong while requesting tickets!");
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        setDetailedTicketState(jsonResponse);
        // setNextState(jsonResponse.links.next);
        // setPrevState(jsonResponse.links.prev);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="detailed_background">

      <div className="detailed_ticket">
      <div className="detailed_area">
      <button className="detailed_close" onClick={() => history.goBack()}>Close</button>
      </div>
      <div>
        <h1>{DetailedTicketState.subject}</h1>
        <p>{DetailedTicketState.description}</p>
        <span>Priority : </span>
        <span>{DetailedTicketState.priority}</span>
        <br></br>
        <span>Status : </span>
        <span>{DetailedTicketState.status}</span>
        <br></br>

        <p>
          Tags :
          {DetailedTicketState.tags.map((tag) => {
            return <span>{"   " + tag}</span>;
          })}
        </p>
        </div>
      </div>
    </div>
  );
}

export default DetailedTicket;
