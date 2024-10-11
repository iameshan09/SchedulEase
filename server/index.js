require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");
const apiErrorHandler = require("./handlers/error.handler");
const routeHandler = require("./routes");
const db = require("./config/db.config");

const app = express();
app.use(cors({ exposedHeaders: ["auth_token"] }));
app.use(bodyParser.json());
app.use("/api", routeHandler());
app.use(apiErrorHandler);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully");
  })
  .catch((e) => {
    console.log(`DB Connection faild: ${e}`);
  });

const server = http.createServer(app);
const listner = server.listen(5000, () => {
  console.log(`Listening on port ${listner.address().port}`);
});

app.all("*", (req, res) => {
  res.status(404).send({
    error: "NO resource Found",
  });
});
