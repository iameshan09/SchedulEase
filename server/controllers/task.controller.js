const ErrorService = require("../services/error.service");
const TaskService = require("../services/task.service");
const {
  validateCreate,
  validateUpdate,
} = require("../validations/task.validation");

const create = async (req, res, next) => {
  try {
    const { error } = validateCreate(req.body);

    if (error) {
      next(ErrorService.badRequest(error.details[0].message));
      return;
    }

    console.log("req.auth", req.auth);

    const newTask = await TaskService.create(req.body, Number(req.auth.userId));

    res.status(200).send("Added");
  } catch (err) {
    next(ErrorService.internal(err.message));
  }
};

const update = async (req, res, next) => {
  try {
    const { error } = validateUpdate(req.body);

    if (error) {
      next(ErrorService.badRequest(error.details[0].message));
      return;
    }

    const task = await TaskService.findById(req.params.id);

    if (!task) {
      next(ErrorService.notFound("Task not found"));
    }

    if (task.dataValues.userId !== req.auth.userId) {
      next(ErrorService.unauthorized("Unauthorized"));
    }

    const updatedRowsCount = await TaskService.update(
      Number(req.params.id),
      req.body
    );

    if (!updatedRowsCount) {
      throw new Error("No records were updated");
    }

    res.status(204).send();
  } catch (err) {
    next(ErrorService.internal(err.message));
  }
};

const getAllByUser = async (req, res, next) => {
  try {
    const tasks = await TaskService.findByUserId(Number(req.auth.userId));

    res.status(200).send(tasks);
  } catch (err) {
    next(ErrorService.internal(err.message));
  }
};

const deleteById = async (req, res, next) => {
  try {
    const task = await TaskService.findById(req.params.id);

    if (!task) {
      next(ErrorService.notFound("Task not found"));
    }

    if (task.dataValues.userId !== req.auth.userId) {
      next(ErrorService.unauthorized("Unauthorized"));
    }

    const updatedRowsCount = await TaskService.delete(Number(req.params.id));

    if (!updatedRowsCount) {
      throw new Error("No records were deleted");
    }

    res.status(204).send();
  } catch (err) {
    next(ErrorService.internal(err.message));
  }
};

module.exports = { create, update, getAllByUser, deleteById };
