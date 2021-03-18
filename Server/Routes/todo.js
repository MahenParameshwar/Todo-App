const express = require("express");
const authenticateToken = require("../Middleware/authenticateToken");
const getBucketListController = require("../Controllers/Bucket/get-bucket-controller");
const createTodoController = require("../Controllers/Todos/create-todo-controller");
const deleteTodoController = require("../Controllers/Todos/delete-todo-controller");
const route = express.Router();

route.post(
  "/auth/createTodo/:bucketId",
  [authenticateToken, createTodoController],
  getBucketListController
);

route.delete(
  "/auth/deleteTodo",
  [authenticateToken, deleteTodoController],
  getBucketListController
);

module.exports = route;
