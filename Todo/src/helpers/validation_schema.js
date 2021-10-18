const Joi = require("joi");
const taskSchema = (task) => {
  const schema = Joi.object().keys({
    id: Joi.number().integer().min(1),
    task: Joi.string().min(1).max(200),
  });
  return schema.validate(task);
};

module.exports = taskSchema;
