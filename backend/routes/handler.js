const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");

router.use(cors());

const token = "2e2bFRmuFrKkPkZ10hS07KfWKnSRHqBI0u0HpejM";
// const token = process.env.React_App_Token;

let url = "https://zccticketviewer.zendesk.com/api/v2/tickets/";
let base_url =
  "https://zccticketviewer.zendesk.com/api/v2/tickets.json?page[size]=25";
let next_url = "";
let prev_url = "";

router.get("/", (req, res) => {
  axios({
    baseURL: base_url,
    auth: { username: "mohitp1@umbc.edu/token", password: token },
  })
    .then((response) => {
      if (response.data.tickets.length !== 0) {
        next_url = response.data.links.next;
        prev_url = response.data.links.prev;
        res.json(response.data.tickets);
      }
    })
    .catch((error) => {
      console.log(error);
      res.send("<h1>It's not you, it's us! We will be back soon!</h1>");
    });
});

router.get("/next", (req, res) => {
  console.log(req);
  axios({
    baseURL: next_url,
    auth: { username: "mohitp1@umbc.edu/token", password: token },
  })
    .then((response) => {
      if (response.data.tickets.length !== 0) {
        next_url = response.data.links.next;
        prev_url = response.data.links.prev;
        res.json(response.data.tickets);
      }
    })
    .catch((error) => {
      console.log(error);
      res.send("<h1>It's not you, it's us! We will be back soon!</h1>");
    });
});

router.get("/prev", (req, res) => {
  //
  axios({
    baseURL: prev_url,
    auth: { username: "mohitp1@umbc.edu/token", password: token },
  })
    .then((response) => {
      if (response.data.tickets.length !== 0) {
        next_url = response.data.links.next;
        prev_url = response.data.links.prev;
        res.json(response.data.tickets);
      }
    })
    .catch((error) => {
      console.log(error);
      res.send("<h1>It's not you, it's us! We will be back soon!</h1>");
    });
});

router.get("/ticket", (req, res) => {
  axios({
    baseURL: url + req.query.ticket,
    auth: { username: "mohitp1@umbc.edu/token", password: token },
  })
    .then((response) => {
      console.log(response.data.ticket);
      res.json(response.data.ticket);
    })
    .catch((error) => {
      console.log(error);
      res.send("<h1>It's not you, it's us! We will be back soon!</h1>");
    });
});
module.exports = router;
