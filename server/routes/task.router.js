const express = require("express");
const {
  create,
  update,
  getAllByUser,
  deleteById,
} = require("../controllers/task.controller");
const { authUser } = require("../middlewares/user.middleware");

module.exports = () => {
  const router = express.Router();
  router.post("/", authUser, create);
  router.get("/", authUser, getAllByUser);
  router.put("/:id", authUser, update);
  router.delete("/:id", authUser, deleteById);
  return router;
};
