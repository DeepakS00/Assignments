const express = require("express");
const router = express.Router();
const todo = require("../models/tasks");
const taskSchema = require("../helpers/validation_schema");

router.get("/", async (req, res) => {
  try {
    const response = await todo.findAll();
    res.json(response);
  } catch (error) {
    res.send(error);
  }
  // return todo.findAll().then((tasks) => res.send(tasks));
});

router.post("/", async (req, res) => {
  const result = taskSchema(req.body);
  if (result.error) {
    res.send(`Error: ${result.error.details[0].message}`);
  } else {
    try {
      await todo.create({
        task: req.body.task,
      });
      res.send(`Inserted task: ${req.body.task} into the todo list`);
    } catch (error) {
      res.send(error);
    }
  }
});

router.put("/:id", async (req, res) => {
  const input = { id: req.params.id, task: req.body.task };
  const result = taskSchema(req.body + req.params);
  if (result.error) {
    res.send(`Error: ${result.error.details[0].message}`);
  } else {
    try {
      await todo.update(
        {
          task: req.body.task,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.send(`The task with id ${req.params.id} is successfully updated`);
    } catch (error) {
      res.send(error);
    }
  }
});

router.delete("/:id", async (req, res) => {
  const result = taskSchema(req.params);
  if (result.error) {
    res.send(`Error: ${result.error.details[0].message}`);
  } else {
    try {
      await todo.destroy({
        where: {
          id: req.params.id,
        },
      });
      res.send(`The task with id ${req.params.id} has been deleted`);
    } catch (error) {
      res.send(error);
    }
  }
});

module.exports = router;
