require("dotenv").config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize("TodoApp", "root", process.env.PASSWORD, {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
