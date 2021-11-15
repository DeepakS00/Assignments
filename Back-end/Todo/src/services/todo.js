const todo = require("../models/tasks");

const getAll = () => todo.findAll();

const getByID = (id) => todo.findByPk(id);

const create = (task) =>
  todo.create({
    task: task,
  });

const update = (id, task) =>
  todo.update(
    {
      task: task,
    },
    { where: { id: id } }
  );

const deleteTask = (id) => todo.destroy({ where: { id: id } });

module.exports = {
  getAll,
  getByID,
  create,
  update,
  deleteTask,
};
