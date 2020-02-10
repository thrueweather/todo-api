const Todo = require("../models/todo");

const createTodo = (req, res, next) => {
  const data = {
    title: req.body.title,
    status: req.body.status,
    description: req.body.description
  };
  Todo.create(data, req, res, next);
};

const getAllTodo = (req, res, next) => {
  Todo.all(req, res, next);
};

const removeAllTodo = (req, res, next) => {
  Todo.removeAllTodo(req, res, next);
};

const updateTodo = (req, res, next) => {
  const data = {
    title: req.body.title,
    status: `${req.body.status}`,
    description: req.body.description
  };
  Todo.updateTodo(req.params.id, data, req, res, next);
};

const removeTodoById = (req, res, next) => {
  Todo.removeTodoById(req.params.id, req, res, next);
};

module.exports = {
  createTodo,
  getAllTodo,
  removeAllTodo,
  updateTodo,
  removeTodoById
};
