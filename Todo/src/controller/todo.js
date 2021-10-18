const services = require("../services/todo");

const getTodos = async (_req, res) => {
  try {
    const result = await services.getAll();
    res.send(result);
  } catch (err) {
    res.send(`${err}`);
  }
};

const getById = async (req, res) => {
  try {
    const result = await services.getByID(+req.params.id);
    if (result === null) throw new Error(`Task not found`);
    res.send(result);
  } catch (err) {
    res.send(`${err}`);
  }
};

const createTask = async (req, res) => {
  try {
    const { task } = req.body;
    await services.createPost(task);
    res.json({ message: `New task has been added` });
  } catch (err) {
    res.send(`${err}`);
  }
};

const updateTask = async (req, res) => {
  try {
    const check = await services.update(+req.params.id);
    if (check === null) throw new Error(`Task not found`);
    await services.update(+req.params.id, req.body.task);
    res.json({ message: `Task is successfully updated` });
  } catch (err) {
    res.send(`${err}`);
  }
};

const deleteTask = async (req, res) => {
  try {
    await services.deleteTask(+req.params.id);
    res.json({ message: `Task is successfully deleted` });
  } catch (err) {
    res.send(`${err}`);
  }
};

module.exports = {
  getById,
  getTodos,
  createTask,
  updateTask,
  deleteTask,
};
