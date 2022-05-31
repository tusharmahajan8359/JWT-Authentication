const express = require("express");

const app = express();

require("dotenv").config();

const bodyParser = require("body-parser");
const allRoutes = require("./routes/route");

app.use(bodyParser());
app.use(allRoutes);

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");

app.listen(3000, (req, res) => {
  console.log("listening on port " + 3000);
});

console.log("tushar");

module.exports = app;
