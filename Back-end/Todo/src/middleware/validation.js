const taskSchema = require("../helpers/validation_schema");

const post = async (req, _res, next) => {
  try {
    const { task } = req.body;
    await taskSchema.taskSchema(task);
    next();
  } catch (err) {
    next(`${err}`);
  }
};

const update = async (req, _res, next) => {
  try {
    const { task } = req.body;
    const id = +req.params.id;
    await taskSchema.idSchema(id);
    await taskSchema.taskSchema(task);
    next();
  } catch (err) {
    next(`${err}`);
  }
};

const deleteTask = async (req, _res, next) => {
  try {
    const id = req.params.id;
    await taskSchema.idSchema(+id);
    next();
  } catch (err) {
    next(`${err}`);
  }
};

module.exports = {
  post,
  update,
  deleteTask,
};
