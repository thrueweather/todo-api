const mongoose = require("mongoose");

const config = require("../config");

const todoSchema = mongoose.Schema({
  title: { type: String, require: true },
  description: String,
  status: Boolean,
  createdOn: { type: Date, require: true, default: Date.now },
  updatedAt: { type: Date, require: true, default: "" }
});

todoSchema.pre("validate", function(next) {
  this.updatedAt = new Date();

  next();
});

const Todo = mongoose.model("todo", todoSchema);

const create = async (data, req, res, next) => {
  try {
    var todo = await Todo.create(data);
  } catch (error) {
    return res.status(200).send(error);
  }

  res.json(todo);
};

const removeTodoById = async (id, req, res, next) => {
  try {
    const todo = await Todo.findByIdAndRemove(id);

    res.status(200).send(todo);
  } catch (error) {
    next(error);
  }
};

const all = async (req, res, next) => {
  try {
    var todoList = await Todo.find(null);
  } catch (error) {
    next(error);
  }

  res.json(todoList);
};

const removeAllTodo = async (req, res, next) => {
  let allTodo = {};

  try {
    // !!! DEPRECATED
    allTodo = await Todo.remove();
  } catch (error) {
    next(error);
  }

  res.json(allTodo);
};

const updateTodo = async (id, data, req, res, next) => {
  const { title, status, description } = data;
  const todoId = req.params.id;

  try {
    await Todo.findById(todoId, async (err, item) => {
      const todo = await Todo.findOne({ id });

      if (!err && !todo) {
        title ? (item.title = title) : null;
        status ? (item.status = status) : null;
        description ? (item.description = description) : null;
        item.save(err => (!err ? res.json(item) : res.status(200).send(err)));
      } else {
        res.status(200).send("Todo already exists.");
      }
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  create,
  all,
  removeAllTodo,
  updateTodo,
  removeTodoById
};
