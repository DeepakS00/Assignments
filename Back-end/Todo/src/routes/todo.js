const express = require("express");
const router = express.Router();
const controller = require("../controller/todo");
const middleware = require("../middleware/validation");

router.get("/", controller.getTodos);
router.post("/", middleware.post, controller.createTask);

router.get("/:id", controller.getById);
router.put("/:id", middleware.update, controller.updateTask);
router.delete("/:id", middleware.deleteTask, controller.deleteTask);

module.exports = router;
