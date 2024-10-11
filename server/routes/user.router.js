const express = require("express");
const { create, signIn } = require("../controllers/user.controller");

module.exports = () => {
  const router = express.Router();
  router.post("/", create);
  router.post("/signin", signIn);
  return router;
};
