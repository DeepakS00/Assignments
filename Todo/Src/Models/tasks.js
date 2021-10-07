const Sequelize = require("sequelize");
const db = require("../utils/database");

const taskModel = db.define("tasks", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  task: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = taskModel;
