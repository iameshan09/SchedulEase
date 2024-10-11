const Task = require("../models/task.model");

class TaskService {
  static async create(body, userId) {
    console.log("userId", userId);

    const result = await Task.create({
      ...body,
      userId,
    });
    return result;
  }

  static async findById(id) {
    return await Task.findOne({
      where: { id },
    });
  }

  static async update(id, body) {
    const [updatedRowsCount] = await Task.update(body, {
      where: { id },
    });

    return updatedRowsCount;
  }

  static async findByUserId(userId) {
    return await Task.findAll({
      where: { userId },
    });
  }

  static async delete(id) {
    const deletedRowsCount = await Task.destroy({
      where: { id },
    });

    return deletedRowsCount;
  }
}

module.exports = TaskService;
