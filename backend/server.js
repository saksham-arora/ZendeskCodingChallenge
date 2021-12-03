const express = require("express");

const bodyParser = require("body-parser");
const routesHandler = require("./routes/handler.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routesHandler);

app.listen(4000, (req, res) => {
  console.log("Server running on PORT 4000.......");
});

module.exports = app;
