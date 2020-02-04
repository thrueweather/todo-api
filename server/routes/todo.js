const express = require("express");

const todo = require("../controllers/todo");

const router = express.Router();

router.post("/create-todo", todo.createTodo);
router.get("/todo-list", todo.getAllTodo);
router.post("/remove-all-todos", todo.removeAllTodo);
router.post("/update-todo/:id", todo.updateTodo);
router.post("/delete-todo/:id", todo.removeTodoById);

module.exports = router;
