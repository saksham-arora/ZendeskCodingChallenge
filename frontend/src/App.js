import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import TicketList from "./components/TicketList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailedTicket from "./components/DetailedTicket";
import React from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/ticket/:url">
            <Header />
            <DetailedTicket />
          </Route>
          <Route path="/">
            <Header />
            <TicketList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
