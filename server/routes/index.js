const express = require("express");
const taskRoute = require("./task.router");
const userRoute = require("./user.router");

module.exports = () => {
  const router = express.Router();
  router.use("/task", taskRoute());
  router.use("/user", userRoute());
  return router;
};
