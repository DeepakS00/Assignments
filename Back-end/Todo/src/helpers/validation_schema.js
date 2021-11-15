const Joi = require("joi");
module.exports = {
  idSchema: (id) => {
    schema = Joi.number().integer().min(1).required();
    return schema.validateAsync(id);
  },
  taskSchema: (task) => {
    schema = Joi.string().min(1).max(200).required();
    return schema.validateAsync(task)
  }
};

