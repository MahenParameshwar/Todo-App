const Bucket = require("../../Model/bucketModel");
const Todo = require("../../Model/todoModel");
const createTodoController = async (req, res, next) => {
  try {
    const { bucketId } = req.params;

    const todo = {
      bucket: bucketId,
      ...req.body,
    };

    const newTodo = await Todo.create(todo);

    await Bucket.findByIdAndUpdate(
      bucketId,
      { $addToSet: { todos: newTodo._id } },
      { useFindAndModify: false, new: true }
    );

    return next();
  } catch (err) {
    return res.status(400).json({
      message: err.messgae,
    });
  }
};

module.exports = createTodoController;
