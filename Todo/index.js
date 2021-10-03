require("dotenv").config();
const express = require("express");
const db = require("./Utils/database");
const todo = require("./Models/tasks");

const app = express();
// const todo = [];
const port = process.env.PORT || 1998;

db.sync({
  alter: true, // this will drop if any and create new one
})
  .then(() => console.log("created"))
  .catch((err) => console.log("Error:" + err));

const middle1 = (req, res, next) => {
  console.log("First Middleware function defined globally.");
  next();
};

const middle2 = (req, res, next) => {
  console.log("Second middleware called");
  next();
};

// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());

app.use(middle1);

app.get("/", (req, res) => {
  res.send(`<h1 style='color:rgb(138, 64, 35);text-align:center'>
        Hello and Welcome to my Todo App
        </h1>
        <br><br><h5 style='color:rgb(69, 44, 18);text-align:center'>
        To Enter your list please visit /todo, and add or see the list.
        </h5>`);
});

app.get("/todo", (req, res) => {
  return todo.findAll().then((tasks) => res.send(tasks));
});

app.post("/todo", middle2, (req, res) => {
  return todo
    .create({
      task: req.body.task,
    })
    .then(() => {
      console.log("The task created successfully");
      res.send("Done");
    })
    .catch((err) => console.log("Error:" + err));
});

app.put("/todo/:index", (req, res) => {
  return todo
    .update(
      {
        task: req.body.task1,
      },
      {
        where: {
          id: req.params.index,
        },
      }
    )
    .then(() =>
      res.send(`The task with id ${req.params.index} is successfully updated`)
    );
});

app.delete("/todo/:index", (req, res) => {
  return todo
    .destroy({
      force: true,
      where: {
        id: req.params.index,
      },
    })
    .then(() =>
      res.send(`The task with is ${req.params.index} has been deleted`)
    );
});

app.listen(port, "localhost", () => {
  console.log(`The server is now running at http://localhost:${port}/`);
});
