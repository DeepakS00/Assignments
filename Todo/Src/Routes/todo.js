const express = require("express");
const router = express.Router();
const todo = require("../Models/tasks");
const taskSchema = require("../Helpers/validation_schema");

router.use(express.json());

router.get("/", (req, res) => {
  return todo.findAll().then((tasks) => res.send(tasks));
});

router.post("/", async (req, res) => {
  const result = taskSchema(req.body);
  if (result.error) {
    res.send("Error:" + result.error.details);
  } else {
    await todo.create({
      task: req.body.task,
    });
    res.send(`Inserted task: ${req.body.task} into the todo list`);
  }
});

router.put("/:id", async (req, res) => {
  const input = { id: req.params.id, task: req.body.task };
  const result = taskSchema(input);
  if (result.error) {
    res.send(`Error: ${result.error.details[0].message}`);
  } else {
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
  }
});

router.delete("/:id", async(req, res) => {
  const result = taskSchema(req.params);
  if (result.error) {
    res.send(`Error: ${result.error.details[0].message}`);
  } else {
    await todo.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    );
    res.send(`The task with id ${req.params.id} has been deleted`)
  }
});

module.exports = router;
