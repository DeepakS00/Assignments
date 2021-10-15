require("dotenv").config();

const express = require("express");
const db = require("./src/utils/database");
const todo = require("./src/routes/todo");
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");
const app = express();
const port = process.env.PORT || 1998;

db.sync({
  force: true, // this will drop if any and create new one
}).then(() => console.log("created"))
  .catch((err) => console.log("Error:" + err));

const middle1 = (_req, _res, next) => {
  console.log("First Middleware function defined globally.");
  next();
};

app.use(express.json());
app.use("/todo", todo);
// app.use(middle1);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.get("/", (_req, res) => {
  res.send(`<h1 style='color:rgb(138, 64, 35);text-align:center'>
        Hello and Welcome to my Todo App
        </h1>
        <br><br><h5 style='color:rgb(69, 44, 18);text-align:center'>
        To Enter your list please visit /todo, and add or see the list.
        </h5>`);
});

app.listen(port, "localhost", () => {
  console.log(`The server is now running at http://localhost:${port}/`);
});
